import {
  DunkModule,
  ExtractLocalState,
  ExtractPayloads,
} from './types/dunkModule';
import { DunkAction } from './types/dunkAction';
import { mapObjectValues } from '../util/mapObjectValues';
import { DunkChildren } from './types/dunkChildren';

/**
 * Creates a Dunk Module.
 * @param initialLocalState initial local state of the module
 * @param children mapping of names to child modules
 * @param localReducers map of action names to a function reducer for each local action
 */
export function createDunkModule<
  MODULE extends DunkModule<any, any, any>,
  STATE extends MODULE['initialState'] = MODULE['initialState'],
  CHILDREN extends MODULE['children'] = MODULE['children'],
  LOCAL_STATE extends ExtractLocalState<MODULE> = ExtractLocalState<MODULE>,
>(
  initialLocalState: LOCAL_STATE,
  children: CHILDREN,
  localReducers: {
    [ACTION in keyof ExtractPayloads<MODULE>]: (
      state: MODULE['initialState'],
      payload: ExtractPayloads<MODULE>[ACTION],
    ) => MODULE['initialState'];
  },
): DunkModule<LOCAL_STATE, CHILDREN, ExtractPayloads<MODULE>> {
  const childrenState = mapObjectValues(
    children as DunkChildren,
    (child) => child.initialState,
  );

  const allActionTypes = () => {
    const childrenActionTypes = Object.values(children).reduce(
      (types, child) => {
        return [...types, ...child.actionTypes];
      },
      [] as string[],
    );
    return [...Object.keys(localReducers), ...childrenActionTypes];
  };

  const reducer = (state: STATE, action: DunkAction<any, any>): STATE => {
    const localReducer =
      localReducers.hasOwnProperty(action.type) && localReducers[action.type];
    if (localReducer) {
      if ('payload' in action) return localReducer(state, action.payload);
      return localReducer(state, action);
    }
    for (const childName in children) {
      const child = children[childName];
      if (child.actionTypes.includes(action.type))
        return {
          ...state,
          [childName]: child.reducer(state[childName], action),
        };
    }
    return state;
  };

  return {
    initialState: {
      ...initialLocalState,
      ...childrenState,
    },
    children,
    actionTypes: allActionTypes(),
    reducer,
  };
}

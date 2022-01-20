import {
  AnyAction,
  applyMiddleware,
  createStore,
  Middleware,
  PreloadedState,
  Reducer,
} from 'redux';
import { DunkModule } from '../module/types/dunkModule';

/**
 * Creates a Redux store, given the root module of the Dunk store.
 * @param rootModule
 * @param initialState initial state of the store. If not provided, will use the initial state specified by modules
 * @param middleware any middleware to apply to Redux store
 */
export function createReduxStore<
  ROOT extends DunkModule<any, any>,
  ROOT_STATE extends ROOT['initialState'] = ROOT['initialState'],
>(
  rootModule: ROOT,
  initialState?: PreloadedState<ROOT_STATE>,
  ...middleware: Middleware<any, {}, any>[]
) {
  const reducer: Reducer<ROOT_STATE> = (
    state: ROOT_STATE | undefined,
    action: AnyAction,
  ) => {
    if (state)
      return rootModule.reducer(state, {
        payload: undefined,
        ...action,
      });
    return rootModule.initialState;
  };
  return createStore(
    reducer,
    initialState || rootModule.initialState,
    applyMiddleware(...middleware),
  );
}

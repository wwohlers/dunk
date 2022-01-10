import { DunkState } from './dunkState';
import { DunkAction } from './dunkAction';
import { DunkChildren } from './dunkChildren';
import { DunkPayloads } from './dunkPayloads';
import { DunkModuleState } from './dunkModuleState';

/**
 * Types for a Module in a Dunk store. Contains data about the local state of the module, any submodules, payload
 * types, and all possible action types.
 */
export interface DunkModule<
  LOCAL_STATE extends DunkState,
  CHILDREN extends DunkChildren = {},
  PAYLOADS extends DunkPayloads = {},
  STATE extends DunkModuleState<LOCAL_STATE, CHILDREN> = DunkModuleState<
    LOCAL_STATE,
    CHILDREN
  >,
> {
  initialState: STATE;
  children: {
    [KEY in keyof CHILDREN]: CHILDREN[KEY] extends DunkModule<any, any>
      ? CHILDREN[KEY]
      : never;
  };
  actionTypes: string[];
  reducer: (state: STATE, action: DunkAction<any, any>) => STATE;
}

export type ExtractLocalState<MODULE extends DunkModule<any>> =
  MODULE extends DunkModule<infer L, ExtractChildren<MODULE>> ? L : never;

type ExtractChildren<MODULE extends DunkModule<any>> =
  MODULE extends DunkModule<any, infer C> ? C : never;

export type ExtractPayloads<MODULE extends DunkModule<any>> =
  MODULE extends DunkModule<any, any, infer P> ? P : never;

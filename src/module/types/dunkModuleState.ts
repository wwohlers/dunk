import { DunkState } from './dunkState';
import { DunkChildren } from './dunkChildren';

/**
 * Returns the partial state object given by a module's children.
 */
export type ChildrenState<CHILDREN extends DunkChildren> = {
  [NAME in keyof CHILDREN]: CHILDREN[NAME]['initialState'];
};

/**
 * Returns the actual state of a Dunk Module, by combining local state with the recursively computed state of children.
 */
export type DunkModuleState<
  LOCAL_STATE extends DunkState,
  CHILDREN extends DunkChildren,
> = LOCAL_STATE & ChildrenState<CHILDREN>;

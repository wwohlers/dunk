import { DunkModule, ExtractPayloads } from '../module/types/dunkModule';
import { DunkBridgeChildren } from './types/dunkBridgeChildren';
import { DunkBridgeExtras } from './types/dunkBridgeExtras';
import { DunkBridgeActionCreators } from './types/dunkBridgeActionCreators';
import { DunkBridgeSelectorCreators } from './types/dunkBridgeSelectorCreators';
import { DunkBridge } from './types/dunkBridge';

/**
 * Creates a Dunk bridge.
 * @param module the Dunk module of this bridge
 * @param actionCreators functions that return actions that can be processed by this module
 * @param selectorCreators functions that create functions that accept local module state and return any value
 * @param children map of names of children to their respective Dunk bridges
 * @param extras a function that accepts action creators and selectors and returns anything
 */
export function createDunkBridge<
  MODULE extends DunkModule<any>,
  ACTION_CREATORS extends DunkBridgeActionCreators<ExtractPayloads<MODULE>>,
  SELECTOR_CREATORS extends DunkBridgeSelectorCreators<MODULE['initialState']>,
  CHILDREN extends DunkBridgeChildren<MODULE>,
  EXTRAS extends DunkBridgeExtras<MODULE, ACTION_CREATORS, SELECTOR_CREATORS>,
>(
  module: MODULE,
  actionCreators: ACTION_CREATORS,
  selectorCreators: SELECTOR_CREATORS,
  extras: EXTRAS,
  children: CHILDREN,
): DunkBridge<MODULE, ACTION_CREATORS, SELECTOR_CREATORS, CHILDREN, EXTRAS> {
  return {
    actionCreators,
    selectorCreators,
    extras,
    children,
  };
}

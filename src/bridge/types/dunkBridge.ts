import { DunkBridgeActionCreators } from './dunkBridgeActionCreators';
import { DunkBridgeSelectorCreators } from './dunkBridgeSelectorCreators';
import { DunkBridgeChildren } from './dunkBridgeChildren';
import { DunkBridgeExtras } from './dunkBridgeExtras';
import { DunkModule, ExtractPayloads } from '../../module/types/dunkModule';

/**
 * An object that acts as an interface for a Dunk module.
 */
export type DunkBridge<
  MODULE extends DunkModule<any>,
  ACTION_CREATORS extends DunkBridgeActionCreators<ExtractPayloads<MODULE>>,
  SELECTOR_CREATORS extends DunkBridgeSelectorCreators<MODULE['initialState']>,
  CHILDREN extends DunkBridgeChildren<MODULE>,
  EXTRAS extends DunkBridgeExtras<MODULE, ACTION_CREATORS, SELECTOR_CREATORS>,
> = {
  actionCreators: ACTION_CREATORS;
  selectorCreators: SELECTOR_CREATORS;
  extras: EXTRAS;
  children: CHILDREN;
};

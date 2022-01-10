import { DunkModule } from '../../module/types/dunkModule';
import { DunkBridge } from './dunkBridge';

/**
 * An object containing the child bridges of a Dunk bridge.
 */
export type DunkBridgeChildren<MODULE extends DunkModule<any, any>> = {
  [CHILD in keyof MODULE['children']]: DunkBridge<
    MODULE['children'][CHILD],
    any,
    any,
    any,
    any
  >;
};

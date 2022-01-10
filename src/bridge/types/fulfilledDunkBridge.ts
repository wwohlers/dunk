import { DunkBridge } from './dunkBridge';
import { DunkState } from '../../module/types/dunkState';
import { DunkSelector } from '../../module/types/dunkSelector';
import { DunkBridgeChildren } from './dunkBridgeChildren';

/**
 * A Dunk bridge that has been fulfilled, i.e., reconstructed recursively starting from the root bridge to map its
 * selectors and extras.
 */
export type FulfilledDunkBridge<
  RAW extends DunkBridge<any, any, any, any, any>,
  ROOT_STATE extends DunkState,
> = {
  actionCreators: RAW['actionCreators'];
  selectorCreators: {
    [KEY in keyof RAW['selectorCreators']]: (
      ...args: Parameters<RAW['selectorCreators'][KEY]>
    ) => DunkSelector<
      ROOT_STATE,
      ReturnType<ReturnType<RAW['selectorCreators'][KEY]>>
    >;
  };
  extras: ReturnType<RAW['extras']>;
} & FulfilledDunkBridgeChildren<RAW['children'], ROOT_STATE>;

/**
 * Children of a fulfilled Dunk bridge.
 */
export type FulfilledDunkBridgeChildren<
  CHILDREN extends DunkBridgeChildren<any>,
  ROOT_STATE extends DunkState,
> = {
  [CHILD in keyof CHILDREN]: FulfilledDunkBridge<CHILDREN[CHILD], ROOT_STATE>;
};

import { ActionsFromPayloads } from '../../module/types/dunkAction';
import { DunkPayloads } from '../../module/types/dunkPayloads';

/**
 * An object containing action creators for a Dunk bridge.
 */
export type DunkBridgeActionCreators<PAYLOADS extends DunkPayloads> = Record<
  string,
  (...args: any[]) => ActionsFromPayloads<PAYLOADS>
>;

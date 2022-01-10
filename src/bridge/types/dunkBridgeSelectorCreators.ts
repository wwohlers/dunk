import { DunkSelector } from '../../module/types/dunkSelector';

/**
 * An object containing selector creators for a Dunk bridge.
 */
export type DunkBridgeSelectorCreators<STATE> = Record<
  string,
  (...args: any[]) => DunkSelector<STATE, any>
>;

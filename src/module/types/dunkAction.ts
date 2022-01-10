import { DunkPayloads } from './dunkPayloads';

/**
 * An object that can be dispatched to a Dunk store.
 */
export type DunkAction<TYPE extends string, PAYLOAD> = PAYLOAD extends undefined
  ? {
      type: TYPE;
    }
  : {
      type: TYPE;
      payload: PAYLOAD;
    };

/**
 * Utility type that returns all possible DunkAction objects that can be passed to a Dunk module with the given payloads.
 */
export type ActionsFromPayloads<PAYLOADS extends DunkPayloads> = {
  [TYPE in keyof PAYLOADS & string]: DunkAction<TYPE, PAYLOADS[TYPE]>;
}[keyof PAYLOADS & string];

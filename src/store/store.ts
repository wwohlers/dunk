import { Middleware, PreloadedState, Store } from 'redux';
import { createReduxStore } from './createReduxStore';
import { fulfillBridge } from '../bridge/fulfillBridge';
import { DunkBridge } from '../bridge/types/dunkBridge';
import { FulfilledDunkBridge } from '../bridge/types/fulfilledDunkBridge';
import { DunkModule } from '../module/types/dunkModule';

/**
 * Creates a Dunk store, which exposes the Redux store and Dunk bridge.
 * @param rootModule root Dunk module of the store
 * @param rootBridge root Dunk bridge of the store
 * @param initialState initial state of the store. If not provided, will default to the initial state specified by Dunk modules
 * @param middleware any middleware to apply to the Redux store
 */
export function createDunkStore<
  ROOT extends DunkModule<any>,
  ROOT_BRIDGE extends DunkBridge<ROOT, any, any, any, any>,
  ROOT_STATE extends ROOT['initialState'] = ROOT['initialState'],
>(
  rootModule: ROOT,
  rootBridge: ROOT_BRIDGE,
  initialState?: PreloadedState<ROOT_STATE>,
  ...middleware: Middleware<any, {}, any>[]
): [Store<ROOT_STATE>, FulfilledDunkBridge<ROOT_BRIDGE, ROOT_STATE>] {
  const store = createReduxStore(rootModule, initialState, ...middleware);
  const bridge = fulfillBridge<ROOT, ROOT_BRIDGE, ROOT>(
    rootBridge,
    (state) => state,
    store.dispatch,
    store.getState,
  );
  return [store, bridge];
}

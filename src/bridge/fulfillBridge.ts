import { mapObjectValues } from '../util/mapObjectValues';
import { DunkBridgeChildren } from './types/dunkBridgeChildren';
import { DunkModule } from '../module/types/dunkModule';
import { DunkBridgeExtras } from './types/dunkBridgeExtras';
import { DunkBridgeSelectorCreators } from './types/dunkBridgeSelectorCreators';
import { DunkBridge } from './types/dunkBridge';
import { FulfilledDunkBridge } from './types/fulfilledDunkBridge';
import { DunkAction } from '../module/types/dunkAction';

/**
 * Fulfills a Dunk bridge by recursively reconstructing it from the root bridge.
 * @param bridge bridge to fulfill
 * @param rootSelector selector that maps the root state of the store to the local state of this bridge's module
 * @param dispatch dispatch function of the actual store (for fulfilling extras)
 * @param getState getState function of hte actual store (for fulfilling extras)
 */
export function fulfillBridge<
  MODULE extends DunkModule<any, any>,
  BRIDGE extends DunkBridge<MODULE, any, any, any, any>,
  ROOT_MODULE extends DunkModule<any>,
  ROOT_STATE extends ROOT_MODULE['initialState'] = ROOT_MODULE['initialState'],
>(
  bridge: BRIDGE,
  rootSelector: (state: ROOT_STATE) => any,
  dispatch: (action: DunkAction<any, any>) => void,
  getState: () => ROOT_STATE,
): FulfilledDunkBridge<BRIDGE, ROOT_STATE> {
  const mappedSelectors = mapObjectValues(
    bridge.selectorCreators as DunkBridgeSelectorCreators<
      MODULE['initialState']
    >,
    (selectorCreator) => {
      return (...args: any) => {
        return (rootState: ROOT_STATE) =>
          selectorCreator(...args)(rootSelector(rootState));
      };
    },
  ) as FulfilledDunkBridge<BRIDGE, ROOT_STATE>['selectorCreators'];

  const childBridges = mapObjectValues(
    bridge.children as DunkBridgeChildren<MODULE>,
    (child, key) =>
      fulfillBridge(
        child as MODULE['children'][typeof key],
        (rootState) => rootSelector(rootState)[key],
        dispatch,
        getState,
      ),
  );

  type EXTRAS = DunkBridgeExtras<
    MODULE,
    BRIDGE['actionCreators'],
    BRIDGE['selectorCreators']
  >;
  const fulfilledExtras = (bridge.extras as EXTRAS)({
    actionCreators: bridge.actionCreators,
    selectorCreators: bridge.selectorCreators,
    dispatch,
    select: (selector) => {
      return selector(rootSelector(getState()));
    },
  });

  return {
    actionCreators: bridge.actionCreators,
    selectorCreators: mappedSelectors,
    extras: fulfilledExtras,
    ...childBridges,
  };
}

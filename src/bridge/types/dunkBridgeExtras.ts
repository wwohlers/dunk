import { DunkModule, ExtractPayloads } from '../../module/types/dunkModule';
import { DunkBridgeActionCreators } from './dunkBridgeActionCreators';
import { DunkBridgeSelectorCreators } from './dunkBridgeSelectorCreators';
import { DunkSelector } from '../../module/types/dunkSelector';
import { ActionsFromPayloads } from '../../module/types/dunkAction';

type DunkBridgeExtraParam<
  MODULE extends DunkModule<any>,
  ACTION_CREATORS extends DunkBridgeActionCreators<ExtractPayloads<MODULE>>,
  SELECTOR_CREATORS extends DunkBridgeSelectorCreators<MODULE['initialState']>,
> = {
  actionCreators: ACTION_CREATORS;
  selectorCreators: SELECTOR_CREATORS;
  dispatch: (action: ActionsFromPayloads<ExtractPayloads<MODULE>>) => void;
  select: <K extends DunkSelector<MODULE['initialState'], any>>(
    selector: K,
  ) => ReturnType<K>;
};

/**
 * A function that accepts the action creators and selectors of a bridge and returns any value.
 */
export type DunkBridgeExtras<
  MODULE extends DunkModule<any>,
  ACTION_CREATORS extends DunkBridgeActionCreators<ExtractPayloads<MODULE>>,
  SELECTOR_CREATORS extends DunkBridgeSelectorCreators<MODULE['initialState']>,
> = (
  params: DunkBridgeExtraParam<MODULE, ACTION_CREATORS, SELECTOR_CREATORS>,
) => any;

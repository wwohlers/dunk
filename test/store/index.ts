import { rootModule } from './root/rootModule';
import { createDunkStore } from '../../src';
import { rootBridge } from './root/rootBridge';

export const initStore = () => {
  const [store, bridge] = createDunkStore(rootModule, rootBridge);
  return {
    bridge,
    dispatch: store.dispatch,
    select: <R>(
      selector: (state: typeof rootModule['initialState']) => R,
    ): R => {
      return selector(store.getState());
    },
  };
};

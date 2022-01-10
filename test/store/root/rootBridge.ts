import { authBridge } from './auth/authBridge';
import { rootModule } from './rootModule';
import { createDunkBridge } from '../../../src';

export const rootBridge = createDunkBridge(
  rootModule,
  {
    increment: () => ({
      type: 'incrementCounter',
    }),
    setCounter: (value: number) => ({
      type: 'setCounter',
      payload: value,
    }),
  },
  {
    getCounter: () => (state) => {
      return state.counter;
    },
  },
  () => {},
  {
    auth: authBridge,
  },
);

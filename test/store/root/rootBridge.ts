import { authBridge } from './auth/authBridge';
import { createDunkBridge } from '../../../src';
import { Optional, rootModule } from './rootModule';

export const rootBridge = createDunkBridge(
  rootModule,
  {
    setMsg: (msg: Optional<string>) => ({
      type: 'setMsg',
      payload: msg,
    }),
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

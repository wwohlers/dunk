import { createDunkModule, DunkModule } from '../../../src';
import { authModule, AuthModule } from './auth/authModule';

type RootState = {
  counter: number;
};

type RootPayloads = {
  incrementCounter: undefined;
  setCounter: number;
};

type RootChildren = {
  auth: AuthModule;
};

export type RootModule = DunkModule<RootState, RootChildren, RootPayloads>;

export const rootModule = createDunkModule<RootModule>(
  { counter: 0 },
  {
    auth: authModule,
  },
  {
    incrementCounter: (state) => {
      return {
        ...state,
        counter: state.counter + 1,
      };
    },
    setCounter: (state, payload) => {
      return {
        ...state,
        counter: payload,
      };
    },
  },
);

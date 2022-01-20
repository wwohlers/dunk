import { createDunkModule, DunkModule } from '../../../src';
import { authModule, AuthModule } from './auth/authModule';

export type Optional<T> =
  | {
      hasValue: false;
    }
  | {
      hasValue: true;
      value: T;
    };

type RootState = {
  counter: number;
  msg: Optional<string>;
};

export type RootPayloads = {
  incrementCounter: undefined;
  setCounter: number;
  setMsg: Optional<string>;
};

type RootChildren = {
  auth: AuthModule;
};

export type RootModule = DunkModule<RootState, RootChildren, RootPayloads>;

export const rootModule = createDunkModule<RootModule>(
  {
    counter: 0,
    msg: { hasValue: false },
  },
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
    setMsg: (state, payload) => {
      return {
        ...state,
        msg: payload,
      };
    },
  },
);

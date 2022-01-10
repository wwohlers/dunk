import { createDunkModule, DunkModule } from '../../../../src';

export type User = {
  id: number;
  email: string;
};

type AuthState = {
  isSignedIn: boolean;
  user: User | undefined;
  lastSignIn: number | undefined;
};

type AuthPayloads = {
  signIn: User;
  signOut: undefined;
};

export type AuthModule = DunkModule<AuthState, {}, AuthPayloads>;

export const authModule = createDunkModule<AuthModule>(
  {
    isSignedIn: false,
    user: undefined,
    lastSignIn: undefined,
  },
  {},
  {
    signIn: (state, payload) => ({
      isSignedIn: true,
      user: payload,
      lastSignIn: Date.now(),
    }),
    signOut: (state) => ({
      ...state,
      isSignedIn: false,
      user: undefined,
    }),
  },
);

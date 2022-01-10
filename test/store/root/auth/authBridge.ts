import { authModule, User } from './authModule';
import { createDunkBridge } from '../../../../src/bridge/createDunkBridge';

export const authBridge = createDunkBridge(
  authModule,
  {
    signIn: (user: User) => ({
      type: 'signIn',
      payload: user,
    }),
    signOut: () => ({
      type: 'signOut',
    }),
  },
  {
    isSignedIn: () => (state) => state.isSignedIn,
    user: () => (state) => state.user,
    lastSignIn: () => (state) => state.lastSignIn,
    isEmail: (email: string) => (state) =>
      state.user && state.user.email === email,
  },
  ({ actionCreators, selectorCreators, dispatch, select }) => {
    return {
      signInOrOut: (user?: User) => {
        if (user) return actionCreators.signIn(user);
        return actionCreators.signOut();
      },
      isEmail: (email: string) => {
        return select(selectorCreators.isEmail(email));
      },
    };
  },
  {},
);

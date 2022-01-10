import { initStore } from './store';
import { User } from './store/root/auth/authModule';

describe('auth', () => {
  test('initial state', () => {
    const { dispatch, select, bridge } = initStore();
    const initialUser = select(bridge.auth.selectorCreators.user());
    expect(initialUser).toBe(undefined);
    const isSignedIn = select(bridge.auth.selectorCreators.isSignedIn());
    expect(isSignedIn).toBe(false);
  });

  test('signIn/Out', () => {
    const { dispatch, select, bridge } = initStore();
    const user: User = {
      id: 4,
      email: 'bob@gmail.com',
    };
    dispatch(bridge.auth.actionCreators.signIn(user));
    const getUser = () => select(bridge.auth.selectorCreators.user());
    const isSignedIn = () => select(bridge.auth.selectorCreators.isSignedIn());
    expect(getUser()).toEqual(user);
    expect(isSignedIn()).toBe(true);
    dispatch(bridge.auth.actionCreators.signOut());
    expect(getUser()).toEqual(undefined);
    expect(isSignedIn()).toBe(false);
  });

  test('selectors', () => {
    const { dispatch, select, bridge } = initStore();
    const user: User = {
      id: 1,
      email: 'user@gmail.com',
    };
    dispatch(bridge.auth.actionCreators.signIn(user));
    expect(select(bridge.auth.selectorCreators.isEmail('a@gmail.com'))).toBe(
      false,
    );
    expect(bridge.auth.extras.isEmail('a@gmail.com')).toBe(false);
    expect(select(bridge.auth.selectorCreators.isEmail('user@gmail.com'))).toBe(
      true,
    );
    expect(bridge.auth.extras.isEmail('user@gmail.com')).toBe(true);
  });

  test('extras', () => {
    const { dispatch, select, bridge } = initStore();
    const user: User = {
      id: 1,
      email: 'user@gmail.com',
    };
    const lastSignIn = () => select(bridge.auth.selectorCreators.lastSignIn());
    expect(lastSignIn()).toBeUndefined();
    dispatch(bridge.auth.extras.signInOrOut(user));
    const signInTime = lastSignIn();
    expect(signInTime).toBeDefined();
    expect(select(bridge.auth.selectorCreators.user())).toEqual(user);
    dispatch(bridge.auth.extras.signInOrOut());
    expect(select(bridge.auth.selectorCreators.isSignedIn())).toBe(false);
    expect(select(bridge.auth.selectorCreators.lastSignIn())).toBe(signInTime);
  });
});

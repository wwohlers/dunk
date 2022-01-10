import { initStore } from './store';

describe('root', () => {
  test('increment', () => {
    const { dispatch, select, bridge } = initStore();
    const getValue = () => select(bridge.selectorCreators.getCounter());
    expect(getValue()).toBe(0);
    dispatch(bridge.actionCreators.increment());
    expect(getValue()).toBe(1);
  });

  test('set', () => {
    const { dispatch, select, bridge } = initStore();
    const getValue = () => select(bridge.selectorCreators.getCounter());
    expect(getValue()).toBe(0);
    dispatch(bridge.actionCreators.setCounter(5));
    expect(getValue()).toBe(5);
    dispatch(bridge.actionCreators.increment());
    expect(getValue()).toBe(6);
  });
});

import { openFirstMapLocation } from "../sagas/app";
import { cloneableGenerator } from 'redux-saga/utils';

const __DEV__ = true

describe('test', () => {
  it('works', () => {
    expect(1).toBe(1);
  });

  it('gen', () => {
    const gen = cloneableGenerator(openFirstMapLocation)();

    assert.deepEqual(
      gen.next().done,
      false,
      'should fail since no launchType defined'
    );
  });
  
})


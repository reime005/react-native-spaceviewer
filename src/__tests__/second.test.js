import { loadNextLaunches } from "../sagas/api";
import { cloneableGenerator } from 'redux-saga/utils';

describe('test', () => {
  it('works', () => {
    expect(1).toBe(1);
  });

  it('gen', () => {
    const gen = cloneableGenerator(loadNextLaunches)();

    // console.log(gen.next());
    
    // assert.deepEqual(
    //   gen.next().done,
    //   false,
    //   'should fail since no launchType defined'
    // );
  });
  
})


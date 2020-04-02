const INITIAL_STATE = {};

export const nav = (state = INITIAL_STATE, action) => {
  let nextState;

  switch (action.type) {
    default:
      //nextState = RootNavigator.router.getStateForAction(action, state);
      break;
  }

  return nextState || state;
};

export default nav;

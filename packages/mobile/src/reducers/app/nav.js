import { NavigationActions } from 'react-navigation';

import { RootNavigator } from '../../containers/navigators';

const INITIAL_STATE = RootNavigator.router.getStateForAction(
  NavigationActions.init()
);

export const nav = (state = INITIAL_STATE, action) => {
  let nextState;

  switch (action.type) {
    default:
      nextState = RootNavigator.router.getStateForAction(action, state);
      break;
  }

  return nextState || state;
};

export default nav;

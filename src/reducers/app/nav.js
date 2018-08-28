import { NavigationActions } from 'react-navigation';

import {
    HOME_SCREEN
} from '../../constants/routes';
import { RootNavigator } from '../../containers/navigators';

import { RESET_TO_MAIN_ROUTE } from '../../actions';

const INITIAL_STATE = RootNavigator.router.getStateForAction(NavigationActions.init());

const getResetAction = (routeName) => NavigationActions.reset({
    index: 0,
    key: null,
    actions: [
        NavigationActions.navigate({ routeName }),
    ],  
});

export const nav = (state = INITIAL_STATE, action) => {
    let nextState;
    
    switch (action.type) {
        case RESET_TO_MAIN_ROUTE:
        {
            const resetToMainAction = getResetAction(HOME_SCREEN);
            nextState = RootNavigator.router.getStateForAction(resetToMainAction, state);
            break;
        }
        default:
            nextState = RootNavigator.router.getStateForAction(action, state);
            break;
    }

    return nextState || state;
};

export default nav;

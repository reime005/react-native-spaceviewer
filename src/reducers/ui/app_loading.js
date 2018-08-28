import {
    LOAD_APP_RESOURCES_STARTED,
    LOAD_APP_RESOURCES_SUCCESS,
    LOAD_APP_RESOURCES_ERROR,
} from '../../actions';

const INITIAL_STATE = {
    loading: false,
    ready: false,
    error: '',
};

export const appLoading = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD_APP_RESOURCES_STARTED: {
            return { ...state, loading: true, ready: false, error: '' };
        }
        case LOAD_APP_RESOURCES_SUCCESS: {
            return { ...state, loading: false, ready: true }
            ;
        }
        case LOAD_APP_RESOURCES_ERROR: {
            return { ...state, loading: false, error: action.error.message };
        }
        default:
            return state;
    }
};

export default appLoading;
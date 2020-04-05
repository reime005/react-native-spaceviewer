import { connect } from 'react-redux';
import { ItemsView } from '../views/ItemsView';
import { listRefreshSagaAction, listEndReachedSagaAction } from '../../actions';
import { FILE_NEXT_LAUNCHES } from '../../constants/files';

export const HomeContainer = connect(
  state => ({
    data: state.api[FILE_NEXT_LAUNCHES],
    isLoading: state.api.isLoading,
  }),
  dispatch => ({
    endReached: () => {
      dispatch(listEndReachedSagaAction(FILE_NEXT_LAUNCHES));
    },
    refresh: () => {
      dispatch(listRefreshSagaAction(FILE_NEXT_LAUNCHES));
    },
  }),
)(ItemsView);

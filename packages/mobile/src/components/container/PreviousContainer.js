import { connect } from 'react-redux';
import { listEndReachedSagaAction, listRefreshSagaAction } from '../../actions';
import { ItemsView } from '../views/ItemsView';
import { FILE_PREV_LAUNCHES } from '../../constants/files';

export const PreviousContainer = connect(
  state => ({
    data: state.api[FILE_PREV_LAUNCHES],
    enddate: state.api.enddate,
    isLoading: state.api.isLoading,
  }),
  dispatch => ({
    endReached: () => {
      dispatch(listEndReachedSagaAction(FILE_PREV_LAUNCHES));
    },
    refresh: () => {
      dispatch(listRefreshSagaAction(FILE_PREV_LAUNCHES));
    },
  })
)(ItemsView);

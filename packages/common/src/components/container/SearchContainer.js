import { connect } from 'react-redux';
import { SearchView } from '../views/SearchView';
import {
  searchEndReachedSagaAction,
  searchClearSagaAction,
} from '../../actions';

export const SearchContainer = connect(
  state => ({
    data: state.search.searchResult,
    loading: state.search.loading,
  }),
  dispatch => ({
    endReached: () => {
      dispatch(searchEndReachedSagaAction());
    },
    refresh: () => {
      dispatch(searchClearSagaAction());
    },
  }),
)(SearchView);

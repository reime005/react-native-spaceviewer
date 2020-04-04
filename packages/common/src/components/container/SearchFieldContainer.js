import { connect } from 'react-redux';
import { SearchFieldView } from '../views/SearchFieldView';
import {
  searchOnChangeTextSagaAction,
  searchClearSagaAction,
} from '../../actions';

export const SearchFieldContainer = connect(
  state => ({
    value: state.search.searchText,
  }),
  dispatch => ({
    onClear: () => {
      dispatch(searchClearSagaAction());
    },
    onChangeText: searchText => {
      dispatch(searchOnChangeTextSagaAction(searchText));
    },
  }),
)(SearchFieldView);

export default SearchFieldContainer;

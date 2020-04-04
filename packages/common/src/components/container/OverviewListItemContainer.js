import { connect } from 'react-redux';
import { OverviewListItem } from '../list/OverviewListItem';
import { openFirstMapLocationSagaAction } from '../../actions';

export const OverviewListItemContainer = connect(
  state => ({
    settings: state.settings,
  }),
  dispatch => ({
    openFirstMapLocation: pads => {
      dispatch(openFirstMapLocationSagaAction(pads));
    },
  }),
)(OverviewListItem);

import { connect } from 'react-redux';
import { openFirstMapLocationSagaAction } from '../../actions';
import { MapView } from '../views/MapView';

export const MapContainer = connect(
  state => ({
    settings: state.settings,
  }),
  dispatch => ({
    openFirstMapLocation: pads => {
      dispatch(openFirstMapLocationSagaAction(pads));
    },
  }),
)(MapView);

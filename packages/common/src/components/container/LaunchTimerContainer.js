import { connect } from 'react-redux';
import { LaunchTimer } from '../timer/LaunchTimer';

export const LaunchTimerContainer = connect(
  state => ({
    settings: state.settings,
  }),
  dispatch => ({}),
)(LaunchTimer);

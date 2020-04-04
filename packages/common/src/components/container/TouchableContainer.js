import React from 'react';
import { connect } from 'react-redux';
import { openURLSagaAction } from '../../actions';
import { CustomTouchableHighlight } from '../pure/CustomTouchableHighlight';

export const TouchableContainer = connect(
  state => ({}),
  dispatch => ({
    openURL: url => dispatch(openURLSagaAction(url)),
  }),
)(props => {
  return (
    <CustomTouchableHighlight
      onPress={props.onPress ? props.onPress : () => props.openURL(props.url)}
      style={props.containerStyle}
    >
      {props.children}
    </CustomTouchableHighlight>
  );
});

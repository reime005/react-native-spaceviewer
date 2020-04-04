import React from 'react';
import { connect } from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { CustomTouchableHighlight } from '../CustomTouchableHighlight';
import { openURLSagaAction } from '../../../actions';

export const SocialUrlIcon = connect(
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
      <MaterialCommunityIcons
        name={props.iconName}
        size={props.size}
        color={props.color}
      />
    </CustomTouchableHighlight>
  );
});

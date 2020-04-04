import React from 'react';
import { TouchableOpacity } from 'react-native';
import { colors, touchableOpacity } from '../../constants/theme';

export const CustomTouchableHighlight = props => (
  <TouchableOpacity
    {...props}
    underlayColor={colors.TOUCHABLE_UNDERLAY}
    activeOpacity={touchableOpacity}
  >
    {props.children}
  </TouchableOpacity>
);

export default CustomTouchableHighlight;

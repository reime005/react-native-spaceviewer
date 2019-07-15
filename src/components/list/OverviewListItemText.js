import React from 'react';
import { Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import overviewListStyle from '../../styles/overviewListStyle';
import { colors, overviewListSmallIconSize } from '../../constants/theme';
import { CustomTouchableHighlight } from '../pure/CustomTouchableHighlight';

const Inner = props => (
  <React.Fragment>
    <MaterialCommunityIcons
      style={overviewListStyle.smallTextIconContainer}
      name={props.iconName}
      size={overviewListSmallIconSize}
      color={colors.LIST_ICON}
    />
    <Text numberOfLines={2} style={overviewListStyle.text}>
      {props.text}
    </Text>
  </React.Fragment>
);

export const OverviewListItemText = props =>
  typeof props.onPress === 'function' ? (
    <CustomTouchableHighlight
      onPress={props.onPress}
      style={overviewListStyle.listStyleContainer}>
      <Inner {...props} />
    </CustomTouchableHighlight>
  ) : (
    <View style={overviewListStyle.listStyleContainer}>
      <Inner {...props} />
    </View>
  );

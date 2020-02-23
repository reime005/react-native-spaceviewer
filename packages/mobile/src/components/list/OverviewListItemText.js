import React from 'react';
import { Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import overviewListStyle from '../../styles/overviewListStyle';
import { colors, overviewListSmallIconSize } from '../../constants/theme';
import * as Animatable from 'react-native-animatable';

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

export const OverviewListItemText = props => (
  <Animatable.View
    animation="fadeIn"
    style={overviewListStyle.listStyleContainer}>
    <Inner {...props} />
  </Animatable.View>
);

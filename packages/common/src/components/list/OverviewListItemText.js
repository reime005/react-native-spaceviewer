import React from 'react';
import { Text, View, Platform } from 'react-native';
import overviewListStyle from '../../styles/overviewListStyle';
import { colors } from '../../constants/theme';
import {
  faClock,
  faMapMarkedAlt,
  faIdBadge,
} from '@fortawesome/free-solid-svg-icons';

let FontAwesomeIcon;

if (Platform.OS === 'web') {
  FontAwesomeIcon = require('@fortawesome/react-fontawesome').FontAwesomeIcon;
} else {
  FontAwesomeIcon = require('@fortawesome/react-native-fontawesome')
    .FontAwesomeIcon;
}

const nameToIcon = name => {
  if (name === 'account-box') {
    return faIdBadge;
  } else if (name === 'map-marker') {
    return faMapMarkedAlt;
  } else if (name === 'clock') {
    return faClock;
  }
};

const Inner = props => (
  <React.Fragment>
    <FontAwesomeIcon
      style={{ width: 15 }}
      // style={overviewListStyle.icon}
      color={colors.PRIMARY_ALPHA}
      icon={nameToIcon(props.iconName)}
    />
    <Text numberOfLines={2} style={overviewListStyle.text}>
      {props.text}
    </Text>
  </React.Fragment>
);

export const OverviewListItemText = props => (
  <View animation="fadeIn" style={overviewListStyle.listStyleContainer}>
    <Inner {...props} />
  </View>
);

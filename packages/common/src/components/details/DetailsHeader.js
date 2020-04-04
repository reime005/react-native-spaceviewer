import React from 'react';
import { View, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { detailViewCloseIconSize } from '../../constants/theme';
import overviewDetailsStyle from '../../styles/overviewDetailsStyle';
import { CustomTouchableHighlight } from '../pure/CustomTouchableHighlight';

export const DetailsHeader = props => (
  <View style={overviewDetailsStyle.headerContainer}>
    <Text style={overviewDetailsStyle.title}>{props.title}</Text>

    <CustomTouchableHighlight
      onPress={props.closeView}
      underlayColor="transparent"
    >
      <MaterialCommunityIcons
        size={detailViewCloseIconSize}
        name="close"
        color="#517fa4"
      />
    </CustomTouchableHighlight>
  </View>
);

import React from 'react';
import {
  View,
} from 'react-native';
import { OverviewList } from '../list/OverviewList';
import mainStyle from '../../styles/mainStyle';
import { CustomSpinner } from '../pure/CustomSpinner';

export const ItemsView = (props) => (
  <View style={mainStyle.viewContainer}>
    {
      props.data && props.data.length > 0 ?
      <OverviewList {...props} />
      :
      <View style={mainStyle.basicCenterContainer}>
        <CustomSpinner />
      </View>
    }
  </View>
)
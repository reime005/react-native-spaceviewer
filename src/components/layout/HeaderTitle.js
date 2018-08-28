import React from 'react';

import {
  Image,
  View,
  Text
} from 'react-native';
import mainStyle from '../../styles/mainStyle';

export const HeaderTitle = (props) => (
  <View style={mainStyle.headerTitleContainer}>
  {
    props.text ?
    <Text style={mainStyle.headerTitleContainerText}>
      {props.text}
    </Text>
    :
    <Image
      style={mainStyle.headerImageStyle}
      source={require('../../../assets/images/title.png')}
    />
  }
  </View>  
)
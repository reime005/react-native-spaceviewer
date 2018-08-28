import React from 'react';
import { View } from 'react-native';
import { detailViewImageSize } from '../../constants/theme';
import overviewDetailsStyle from '../../styles/overviewDetailsStyle';
import { OverviewListIconContainer } from '../container/OverviewListIconContainer';
import { DetailsInfoTextContent } from './DetailsInfoTextContent';

export const DetailsInfoContent = (props) => {
  const {
    uri,
  } = props;

  return(
    <View 
      style={overviewDetailsStyle.detailsInfoContainer}
    >
      <OverviewListIconContainer 
        uri={uri} 
        size={detailViewImageSize}
      />

      <DetailsInfoTextContent
        {...props}
      />

    </View>
  )
}

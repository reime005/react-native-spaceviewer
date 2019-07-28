import React, { useEffect, useRef } from 'react';
import { View, Animated, Easing, Dimensions } from 'react-native';
import { detailViewImageSize, fontSize } from '../../constants/theme';
import overviewDetailsStyle from '../../styles/overviewDetailsStyle';
import { OverviewListIconContainer } from '../container/OverviewListIconContainer';
import { DetailsInfoTextContent } from './DetailsInfoTextContent';
import { Text, Content, Item, Icon, Input } from 'native-base';
import {
  statusToMessage,
  statusToColor,
  statusToIconName,
} from '../../constants/api';

const { width: w } = Dimensions.get('window');

export const DetailsInfoContent = props => {
  const { net, lsp, status, vidURLs, uri } = props;

  const width = useRef(new Animated.Value(10)).current;

  useEffect(() => {
    Animated.spring(width, {
      toValue: w * 0.5,
      friction: 1,
      tension: 1,
      delay: 1500,
    }).start();
  }, []);

  return (
    <View style={overviewDetailsStyle.detailsInfoContainer}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-end',
        }}>
        <OverviewListIconContainer uri={uri} size={detailViewImageSize} />
        <Text style={overviewDetailsStyle.titleStyle}>{lsp.name}</Text>

        <View
          style={{
            flex: 1,
            alignItems: 'center',
            flexDirection: 'row',
            paddingLeft: 20,
          }}>
          <Icon
            style={{
              fontSize: fontSize.DETAILS_VIEW_SUBTITLE * 0.8,
              paddingRight: 2,
            }}
            type="MaterialCommunityIcons"
            active
            name={statusToIconName(status)}
          />
          <Text
            style={{
              ...overviewDetailsStyle.subTitleStyle,
            }}>
            {statusToMessage(status)}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'flex-start',
            width: '100%',
            paddingLeft: 5,
          }}>
          <Animated.View
            useNativeDriver={true}
            style={{
              width,
              marginTop: 2,
              height: 4,
              borderRadius: 3,
              backgroundColor: statusToColor(status),
            }}
          />
        </View>
      </View>

      <DetailsInfoTextContent {...props} />
    </View>
  );
};

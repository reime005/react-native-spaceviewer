import React from 'react';
import { View, Text } from 'react-native';
import tabViewStyle from '../../../styles/tabViewStyle';
import { MissionContent } from './MissionContent';
import { ItemContent } from './ItemContent';
import { Card } from 'native-base';

const renderItems = (data, renderItem) => {
  return Array.from(data, item => ItemContent(item, renderItem));
};

export const ArrayContent = props => {
  const data = props.data || [];

  return renderItems(data, props.renderItem);
};

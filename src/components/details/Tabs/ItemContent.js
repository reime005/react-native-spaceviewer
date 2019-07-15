import React from 'react';
import { View } from 'react-native';

export const ItemContent = (item = {}, renderItem) =>
  item === {} ? null : <View key={`${item.id}`}>{renderItem(item)}</View>;

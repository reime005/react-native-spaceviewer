import React from 'react';
import { View, Text } from 'react-native';
import { ItemsView } from './ItemsView';

export const SearchView = (props) => (
  <View style={{flex: 1}}>
    {
      props.data && props.data.length > 0 &&
      <ItemsView
        {...props}
        isLoading={false}
      />
    }
  </View>
)

export default SearchView;
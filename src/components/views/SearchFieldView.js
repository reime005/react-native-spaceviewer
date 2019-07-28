import React from 'react';
import { View, TextInput, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import searchStyle from '../../styles/searchStyle';
import { CustomTouchableHighlight } from '../pure/CustomTouchableHighlight';
import {
  overviewListSmallIconSize,
  footerTabIconSize,
} from '../../constants/theme';

export const SearchFieldView = props => (
  <View style={searchStyle.searchFieldViewContainer}>
    <Ionicons
      size={footerTabIconSize}
      name="ios-search"
      style={searchStyle.searchIcon}
    />
    <TextInput
      style={searchStyle.textInput}
      inlineImageLeft="ic_launcher"
      onChangeText={text => props.onChangeText(text)}
      value={props.value}
      multiline={false}
      placeholder="Search"
    />

    <CustomTouchableHighlight onPress={() => props.onClear()}>
      <Ionicons
        size={footerTabIconSize}
        name="md-close-circle"
        style={searchStyle.searchIcon}
      />
    </CustomTouchableHighlight>
  </View>
);

export default SearchFieldView;

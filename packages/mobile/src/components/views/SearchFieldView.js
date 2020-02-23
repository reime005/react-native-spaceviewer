import React from 'react';
import searchStyle from '../../styles/searchStyle';
import { useTranslation } from 'react-i18next';
import { Item, Input, Icon } from 'native-base';
import * as Animatable from 'react-native-animatable';

export const SearchFieldView = ({ value, onChangeText, onClear }) => {
  const { t } = useTranslation();

  return (
    <Animatable.View
      animation="fadeIn"
      style={searchStyle.searchFieldViewContainer}>
      <Item>
        <Icon
          style={searchStyle.searchIcon}
          name="ios-search"
          type="Ionicons"
        />
        <Input
          testID="searchInput"
          placeholder={t('search')}
          autoCapitalize="none"
          autoFocus
          autoCorrect={false}
          multiline={false}
          value={value}
          onChangeText={onChangeText}
        />
        <Icon
          color="red"
          style={searchStyle.searchIcon}
          name="close-circle"
          onPress={onClear}
        />
      </Item>
    </Animatable.View>
  );
};

export default SearchFieldView;

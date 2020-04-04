import { faSearch, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { TextInput, TouchableOpacity, View, Platform } from 'react-native';
import { colors } from '../../constants/theme';
import searchStyle from '../../styles/searchStyle';

let FontAwesomeIcon;

if (Platform.OS === 'web') {
  FontAwesomeIcon = require('@fortawesome/react-fontawesome').FontAwesomeIcon;
} else {
  FontAwesomeIcon = require('@fortawesome/react-native-fontawesome')
    .FontAwesomeIcon;
}

export const SearchFieldView = ({ value, onChangeText, onClear }) => {
  const { t } = useTranslation();

  return (
    <View style={searchStyle.searchFieldViewContainer}>
      <View
        style={{
          flexDirection: 'row',
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          flex: 1,
        }}
      >
        <FontAwesomeIcon size={18} color={colors.DARK_GREY} icon={faSearch} />
        <TextInput
          style={{
            outline: 'none',
            width: '100%',
            paddingLeft: 8,
            paddingRight: 8,
            flex: 1,
          }}
          testID="searchInput"
          placeholder={t('search')}
          autoCapitalize="none"
          autoFocus
          autoCorrect={false}
          multiline={false}
          value={value}
          onChangeText={onChangeText}
        />
        <TouchableOpacity onPressIn={onClear}>
          <FontAwesomeIcon
            size={18}
            color={colors.DARK_GREY}
            icon={faTimesCircle}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchFieldView;

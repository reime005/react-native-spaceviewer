import React from 'react';
import { View } from 'react-native';
import { ItemsView } from './ItemsView';
import { CustomSpinner } from '../pure/CustomSpinner';
import { Text } from 'native-base';
import { useTranslation } from 'react-i18next';

export const SearchView = props => {
  const { t } = useTranslation();

  return (
    <View style={{ flex: 1, width: '100%', alignItems: 'center' }}>
      {!props.loading && props.data.length ? (
        <ItemsView {...props} isLoading={false} />
      ) : null}
      {props.loading ? <CustomSpinner /> : null}
      {!props.loading && !props.data.length ? (
        <Text style={{ paddingTop: 20 }}>{t('No Data Found')}</Text>
      ) : null}
    </View>
  );
};

export default SearchView;

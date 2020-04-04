import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

import { OverviewList } from '../list/OverviewList';
import mainStyle from '../../styles/mainStyle';
import { CustomSpinner } from '../pure/CustomSpinner';
import { useHistory } from 'react-router-dom';

export const ItemsView = props => {
  const { t } = useTranslation();
  const history = useHistory();

  return (
    <View {...props} style={mainStyle.viewContainer}>
      {props.data && props.data.length ? (
        <OverviewList {...props} history={history} />
      ) : (
        <View
          style={{
            ...mainStyle.basicCenterContainer,
            justifyContent: 'center',
          }}
        >
          <Text
            style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold' }}
          >
            {t('loading')}
          </Text>
          <CustomSpinner />
        </View>
      )}
    </View>
  );
};

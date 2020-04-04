import React from 'react';
import { Card, CardItem, Text } from 'native-base';

import { renderInfoURLs } from './renderInfoURLs';
import { WikiBadge } from '../../pure/SocialIcons/WikiBadge';
import overviewDetailsStyle from '../../../styles/overviewDetailsStyle';

export const AgencyContent = (agency = {}) => {
  return agency.name === '' ? null : (
    <Card style={overviewDetailsStyle.agencyContent}>
      <CardItem header bordered style={{ backgroundColor: '#FEF7EA' }}>
        <Text>{agency.name}</Text>
      </CardItem>
      {
        <CardItem
          bordered
          style={[
            overviewDetailsStyle.cardItem,
            { backgroundColor: '#FFFBF4' },
          ]}
        >
          {agency.wikiURL !== '' && <WikiBadge url={agency.wikiURL} />}
          {renderInfoURLs(agency.infoURLs, false)}
        </CardItem>
      }
    </Card>
  );
};

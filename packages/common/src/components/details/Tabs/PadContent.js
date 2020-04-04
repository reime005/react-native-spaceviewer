import React from 'react';
import { View } from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
} from 'native-base';

import tabViewStyle from '../../../styles/tabViewStyle';
import { ArrayContent } from './ArrayContent';
import { AgencyContent } from './AgencyContent';
import { MapContent } from './MapContent';
import overviewDetailsStyle from '../../../styles/overviewDetailsStyle';
import { WikiBadge } from '../../pure/SocialIcons/WikiBadge';

export const PadContent = (pad = {}) => {
  return pad.name === '' ? null : (
    <Card style={overviewDetailsStyle.padContent}>
      <CardItem header bordered style={{ backgroundColor: '#FEF7EA' }}>
        <Text>{pad.name}</Text>
      </CardItem>

      {pad.wikiURL !== '' && (
        <CardItem bordered style={{ backgroundColor: '#FFFBF4' }}>
          <WikiBadge url={pad.wikiURL} />
        </CardItem>
      )}

      <CardItem
        bordered
        footer
        style={[
          { backgroundColor: '#FFFBF4' },
          overviewDetailsStyle.mapViewContainer,
        ]}
      >
        <MapContent pad={pad} />
      </CardItem>

      {pad.agencies && pad.agencies.length > 0 && (
        <ArrayContent renderItem={AgencyContent} data={pad.agencies} />
      )}
    </Card>
  );
};

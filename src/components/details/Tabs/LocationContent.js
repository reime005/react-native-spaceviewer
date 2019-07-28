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
import { renderInfoURLs } from './renderInfoURLs';
import { PadContent } from './PadContent';
import { ArrayContent } from './ArrayContent';
import { WikiBadge } from '../../pure/SocialIcons/WikiBadge';
import overviewDetailsStyle from '../../../styles/overviewDetailsStyle';

export const LocationContent = (location = {}) => {
  return (
    <Card style={{ alignItems: 'center', width: '100%' }}>
      <CardItem header>
        <Text>{location.name}</Text>
      </CardItem>

      <CardItem bordered style={[overviewDetailsStyle.cardItem]}>
        {location.wikiURL !== '' && <WikiBadge url={location.wikiURL} />}
        {renderInfoURLs(location.infoURLs, false)}
      </CardItem>

      {location.pads.length > 0 && (
        <ArrayContent renderItem={PadContent} data={location.pads} />
      )}
    </Card>
  );
};

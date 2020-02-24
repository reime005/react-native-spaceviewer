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

import { renderInfoURLs } from './renderInfoURLs';
import { WikiBadge } from '../../pure/SocialIcons/WikiBadge';
import { renderPayloads } from './renderPayloads';
import overviewDetailsStyle from '../../../styles/overviewDetailsStyle';

export const RocketContent = (rocket = {}) => {
  return rocket.name === '' ? null : (
    <Card style={overviewDetailsStyle.rocketContentContainer}>
      <CardItem header bordered>
        <Text>{rocket.name}</Text>
      </CardItem>
      {rocket.familyname !== '' && (
        <CardItem>
          <Text>Family: {rocket.familyname}</Text>
        </CardItem>
      )}
      {rocket.configuration !== '' && (
        <CardItem>
          <Text>Configuration: {rocket.configuration}</Text>
        </CardItem>
      )}
      {
        <CardItem bordered style={[overviewDetailsStyle.cardItem]}>
          {rocket.wikiURL !== '' && <WikiBadge url={rocket.wikiURL} />}
          {renderInfoURLs(rocket.infoURLs, false)}
        </CardItem>
      }
      {/* {
        renderPayloads(rocket.payloads)
      } */}
    </Card>
  );
};

import React from 'react';
import { Card, CardItem, Text, Body } from 'native-base';

import { ArrayContent } from './ArrayContent';
import { AgencyContent } from './AgencyContent';
import { WikiBadge } from '../../pure/SocialIcons/WikiBadge';
import overviewDetailsStyle from '../../../styles/overviewDetailsStyle';

export const MissionContent = (mission = {}) => {
  return mission.name === '' ? null : (
    <Card style={overviewDetailsStyle.missionContent}>
      <CardItem header bordered>
        <Text>{mission.name}</Text>
      </CardItem>
      <CardItem bordered>
        <Body>
          <Text>{mission.description}</Text>
        </Body>
      </CardItem>
      {mission.wikiURL !== '' && (
        <CardItem bordered>
          <WikiBadge url={mission.wikiURL} />
        </CardItem>
      )}
      {mission.agencies && mission.agencies.length > 0 && (
        <ArrayContent renderItem={AgencyContent} data={mission.agencies} />
      )}
    </Card>
  );
};

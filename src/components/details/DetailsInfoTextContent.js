import React from 'react';
import { View } from 'react-native';
import { Header, Card, CardItem, Text, Body } from 'native-base';
import overviewDetailsStyle from '../../styles/overviewDetailsStyle';
import { statusToMessage, statusToColor } from '../../constants/api';
import { renderInfoURLs } from './Tabs/renderInfoURLs';
import { LaunchTimerContainer } from '../container/LaunchTimerContainer';
import { WikiBadge } from '../pure/SocialIcons/WikiBadge';
import { renderVidURLs } from './Tabs/renderVidURLs';
import { countdownSize } from '../../constants/theme';
import { StreamBadge, ShareBadge } from '../pure';

const style = status => ({
  backgroundColor: statusToColor(status),
});

export const DetailsInfoTextContent = props => {
  const { net, lsp, status, vidURLs } = props;

  return (
    <View style={overviewDetailsStyle.detailsInfoTextContainer}>
      <Card style={{ backgroundColor: '#F4F8FF' }}>
        <CardItem
          bordered
          header
          style={overviewDetailsStyle.detailsInfoTextHeader}>
          <Text style={{ fontWeight: 'bold', color: 'black' }}>{lsp.name}</Text>
        </CardItem>

        <CardItem bordered style={style(status)}>
          <Text>{statusToMessage(status)}</Text>
        </CardItem>

        {
          <CardItem
            bordered
            style={[
              overviewDetailsStyle.cardItem,
              { backgroundColor: '#F4F8FF' },
            ]}>
            {lsp.wikiURL && <WikiBadge url={lsp.wikiURL} />}
            <ShareBadge data={props} />
            {vidURLs && vidURLs.length > 0 && renderVidURLs(vidURLs, () => {})}
          </CardItem>
        }

        {
          <CardItem
            bordered
            style={[
              overviewDetailsStyle.cardItem,
              { backgroundColor: '#F4F8FF' },
            ]}>
            {renderInfoURLs(lsp.infoURLs, false)}
          </CardItem>
        }

        <View style={{ flex: 1, minHeight: countdownSize * 5 }}>
          <LaunchTimerContainer net={net} />
        </View>
      </Card>
    </View>
  );
};

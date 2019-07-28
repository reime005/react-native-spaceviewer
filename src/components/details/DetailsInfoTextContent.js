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
  fontWeight: 'bold',
});

export const DetailsInfoTextContent = props => {
  const { net, lsp, vidURLs } = props;

  return (
    <View style={overviewDetailsStyle.detailsInfoTextContainer}>
      <View style={{ flex: 1, width: '100%', alignItems: 'center' }}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          {renderInfoURLs(lsp.infoURLs, false, 0, 3)}
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          {renderInfoURLs(lsp.infoURLs, false, 2, 5)}
        </View>

        <View style={{ flex: 1, flexDirection: 'row' }}>
          {vidURLs && vidURLs.length > 0 && renderVidURLs(vidURLs, 0, 3)}
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          {lsp.wikiURL && <WikiBadge url={lsp.wikiURL} />}
          <ShareBadge data={props} />
        </View>
        <LaunchTimerContainer net={net} />
      </View>
    </View>
  );
};

import React from 'react';
import { View, WebView, ScrollView } from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
} from 'native-base';

import settingsStyle from '../../styles/settingsStyle';
import { CustomTouchableHighlight } from '../pure/CustomTouchableHighlight';
import overviewDetailsStyle from '../../styles/overviewDetailsStyle';
import { TouchableContainer } from '../container/TouchableContainer';
import { headerBottomSpace } from '../../constants/theme';
import { version } from '../../../package';

export class CreditsView extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={{ flex: 1, padding: '1%' }}>
        <ScrollView>
          <View
            style={{
              height: headerBottomSpace,
            }}
          />
          <Card>
            <CardItem header bordered>
              <Text>Credits</Text>
            </CardItem>
            <CardItem
              bordered
              style={[overviewDetailsStyle.cardItem, { alignItems: 'center' }]}>
              <Text>Data for this app, provided by </Text>
              <TouchableContainer url={'https://launchlibrary.net'}>
                <Text>Launch Library</Text>
              </TouchableContainer>
            </CardItem>
            <CardItem
              bordered
              style={[overviewDetailsStyle.cardItem, { alignItems: 'center' }]}>
              <Text>Icons made by </Text>
              <TouchableContainer url={'https://www.freepik.com'}>
                <Text>Freepik</Text>
              </TouchableContainer>
              <Text> from </Text>
              <TouchableContainer url={'https://www.flaticon.com'}>
                <Text>www.flaticon.com</Text>
              </TouchableContainer>
              <Text> and is licensed by </Text>
              <CustomTouchableHighlight
                url={'https://creativecommons.org/licenses/by/3.0'}>
                <Text>CC 3.0 BY</Text>
              </CustomTouchableHighlight>
            </CardItem>
            <CardItem footer button>
              <CustomTouchableHighlight url={'https://mariusreimer.com'}>
                <Text>
                  © {new Date().getUTCFullYear()} Marius Reimer (reime005)
                </Text>
              </CustomTouchableHighlight>
            </CardItem>
          </Card>

          <Card>
            <CardItem header bordered>
              <Text>Space Viewer Version: {version}</Text>
            </CardItem>
          </Card>
        </ScrollView>
      </View>
    );
  }

  onValueChange(value) {
    this.setState({ switchValue: value });
  }
}

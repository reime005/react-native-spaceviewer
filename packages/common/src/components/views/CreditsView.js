import { Card, CardItem } from 'native-base';
import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import Config from 'react-native-config';

import overviewDetailsStyle from '../../styles/overviewDetailsStyle';
import { TouchableContainer } from '../container/TouchableContainer';
import { CustomTouchableHighlight } from '../pure/CustomTouchableHighlight';

const version = `${Config.APP_VERSION} (Build ${Config.APP_VERSION_CODE})`;

export class CreditsView extends React.Component {
  render() {
    return (
      <View
        {...this.props}
        style={{ flex: 1, padding: 5, backgroundColor: 'white' }}
      >
        <ScrollView>
          <Card>
            <CardItem header bordered>
              <Text>Credits</Text>
            </CardItem>
            <CardItem
              bordered
              style={[overviewDetailsStyle.cardItem, { alignItems: 'center' }]}
            >
              <Text>Data for this app, provided by </Text>
              <TouchableContainer url={'https://launchlibrary.net'}>
                <Text>Launch Library</Text>
              </TouchableContainer>
            </CardItem>
            <CardItem
              bordered
              style={[overviewDetailsStyle.cardItem, { alignItems: 'center' }]}
            >
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
                url={'https://creativecommons.org/licenses/by/3.0'}
              >
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

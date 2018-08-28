import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Container, Header, Tab, Tabs, ScrollableTab, Card } from 'native-base';
import overviewDetailsStyle from '../../styles/overviewDetailsStyle';
import { MissionContent } from './Tabs/MissionContent';
import { ArrayContent } from './Tabs/ArrayContent';
import { AgencyContent } from './Tabs/AgencyContent';
import { RocketContent } from './Tabs/RocketContent';
import { LocationContent } from './Tabs/LocationContent';
import { MapContent } from './Tabs/MapContent';

export class DetailsContent extends React.Component {
  render() {
    return (
      <View style={overviewDetailsStyle.tabContainer}>
        <Tabs tabBarUnderlineStyle={overviewDetailsStyle.tabBarUnderlineStyle}>

          {
            this.props.item.location.pads.length > 0 &&
            <Tab
              activeTextStyle={overviewDetailsStyle.tabActiveTextStyle}
              textStyle={overviewDetailsStyle.tabTextStyle}
              style={overviewDetailsStyle.tabContentStyle}
              tabStyle={overviewDetailsStyle.tabStyle} 
              activeTabStyle={overviewDetailsStyle.activeTabStyle}
              heading={this.props.item.location.pads.length > 1 ? "Locations" : "Location"}
            >
              <LocationContent
                {...this.props.item.location}
                // {...Array.of(this.props.item.location[0], this.props.item.location[0])}
              />
            </Tab>
          }

        <Tab
          activeTextStyle={overviewDetailsStyle.tabActiveTextStyle}
          textStyle={overviewDetailsStyle.tabTextStyle}
          style={overviewDetailsStyle.tabContentStyle}
          tabStyle={overviewDetailsStyle.tabStyle} 
          activeTabStyle={overviewDetailsStyle.activeTabStyle}
          heading={'Rocket Info'}
        >
          <RocketContent
            {...this.props.item.rocket}
          />
        </Tab>
          
          {
            this.props.item.missions.length > 0 &&
            <Tab 
              activeTextStyle={overviewDetailsStyle.tabActiveTextStyle}
              textStyle={overviewDetailsStyle.tabTextStyle}
              style={overviewDetailsStyle.tabContentStyle}
              tabStyle={overviewDetailsStyle.tabStyle} 
              activeTabStyle={overviewDetailsStyle.activeTabStyle}
              heading={this.props.item.missions.length > 1 ? "Missions" : "Mission"}
            >
            <View style={overviewDetailsStyle.rocketContentContainer}>
            <ArrayContent 
                renderItem={MissionContent} 
                data={this.props.item.missions} 
              />
            </View>
              
            </Tab>
          }
          
        </Tabs>
      </View>
    );
  }
}

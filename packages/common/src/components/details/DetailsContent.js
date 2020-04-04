import React from 'react';
import { View } from 'react-native';
import { Text, Tab, Tabs, TabHeading, Icon, ScrollableTab } from 'native-base';
import overviewDetailsStyle from '../../styles/overviewDetailsStyle';
import { MissionContent } from './Tabs/MissionContent';
import { ArrayContent } from './Tabs/ArrayContent';
import { RocketContent } from './Tabs/RocketContent';
import { LocationContent } from './Tabs/LocationContent';
import { useTranslation } from 'react-i18next';
import { colors } from '../../constants/theme';
import tabViewStyle from '../../styles/tabViewStyle';

const HeadingItem = ({ iconName = '', title = '' }) => (
  <TabHeading style={{ backgroundColor: 'transparent' }}>
    <Icon
      name={iconName}
      style={{ color: colors.PRIMARY, fontSize: 22 }}
      type="Ionicons"
    />
    <Text style={{ color: colors.DARK_TEXT_PRIMARY }}>{title}</Text>
  </TabHeading>
);

export const DetailsContent = ({ item = {} }) => {
  const { t } = useTranslation();

  return (
    <View style={overviewDetailsStyle.tabContainer}>
      <Tabs
        springFriction={50}
        springTension={25}
        tabBarUnderlineStyle={overviewDetailsStyle.tabBarUnderlineStyle}
      >
        {item.location.pads.length > 0 && (
          <Tab
            activeTextStyle={overviewDetailsStyle.tabActiveTextStyle}
            textStyle={overviewDetailsStyle.tabTextStyle}
            style={overviewDetailsStyle.tabContentStyle}
            tabStyle={overviewDetailsStyle.tabStyle}
            activeTabStyle={overviewDetailsStyle.activeTabStyle}
            heading={
              <TabHeading style={tabViewStyle.tabStyle}>
                <HeadingItem
                  iconName="ios-navigate"
                  title={
                    item.location.pads.length > 1
                      ? t('Locations')
                      : t('Location')
                  }
                />
              </TabHeading>
            }
          >
            <LocationContent
              {...item.location}
              // {...Array.of(this.props.item.location[0], this.props.item.location[0])}
            />
          </Tab>
        )}

        <Tab
          activeTextStyle={overviewDetailsStyle.tabActiveTextStyle}
          textStyle={overviewDetailsStyle.tabTextStyle}
          style={overviewDetailsStyle.tabContentStyle}
          tabStyle={overviewDetailsStyle.tabStyle}
          activeTabStyle={overviewDetailsStyle.activeTabStyle}
          heading={
            <TabHeading style={tabViewStyle.tabStyle}>
              <HeadingItem iconName="ios-rocket" title={t('Rocket Info')} />
            </TabHeading>
          }
        >
          <RocketContent {...item.rocket} />
        </Tab>

        {item.missions.length > 0 && (
          <Tab
            activeTextStyle={overviewDetailsStyle.tabActiveTextStyle}
            textStyle={overviewDetailsStyle.tabTextStyle}
            style={overviewDetailsStyle.tabContentStyle}
            tabStyle={overviewDetailsStyle.tabStyle}
            activeTabStyle={overviewDetailsStyle.activeTabStyle}
            heading={
              <TabHeading style={tabViewStyle.tabStyle}>
                <HeadingItem
                  iconName="ios-paper"
                  title={
                    item.missions.length > 1 ? t('Missions') : t('Mission')
                  }
                />
              </TabHeading>
            }
          >
            <View style={overviewDetailsStyle.rocketContentContainer}>
              <ArrayContent renderItem={MissionContent} data={item.missions} />
            </View>
          </Tab>
        )}
      </Tabs>
    </View>
  );
};

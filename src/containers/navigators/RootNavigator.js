import React from 'react';
import { View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { HeaderTitle } from '../../components/layout/HeaderTitle';
import * as Routes from '../../constants/routes';
import { colors, footerTabIconSize } from '../../constants/theme';
import {
  CreditsScreen,
  DetailsScreen,
  HomeScreen,
  PreviousScreen,
  PrivacyPolicyScreen,
  SettingsScreen,
} from '../../screens';
import { SearchScreen } from '../../screens/SearchScreen';
import mainStyle from '../../styles/mainStyle';
import { AppLoadingScreen } from '../app/AppLoadingScreen';

export const navOptions = ({ navigation }) => ({
  headerStyle: mainStyle.headerStyle,
  headerTitle: <HeaderTitle />,
  headerTitleStyle: mainStyle.headerTextTitleStyle,
  headerBackTitleStyle: mainStyle.headerTitleStyle,
  headerRight: null,
  headerLeft: null,
  headerTransparent: true,
});

const HomeStack = StackNavigator(
  {
    [Routes.HOME_SCREEN]: { screen: HomeScreen },
    [Routes.DETAILS_SCREEN]: { screen: DetailsScreen },
  },
  {
    navigationOptions: navOptions('tab-button-home'),
  }
);

const PreviousStack = StackNavigator(
  {
    [Routes.PREVIOUS_SCREEN]: { screen: PreviousScreen },
    [Routes.DETAILS_SCREEN]: { screen: DetailsScreen },
  },
  {
    navigationOptions: navOptions,
  }
);

const SearchStack = StackNavigator(
  {
    [Routes.SEARCH_SCREEN]: { screen: SearchScreen },
    [Routes.DETAILS_SCREEN]: { screen: DetailsScreen },
  },
  {
    navigationOptions: navOptions,
  }
);

const SettingsStack = StackNavigator(
  {
    [Routes.SETTINGS_SCREEN]: { screen: SettingsScreen },
    [Routes.PRIVACY_POLICY_SCREEN]: { screen: PrivacyPolicyScreen },
    [Routes.CREDITS_SCREEN]: { screen: CreditsScreen },
  },
  {
    navigationOptions: navOptions,
  }
);

const HomeNavigator = TabNavigator(
  {
    [Routes.HOME_SCREEN]: { screen: HomeStack },
    [Routes.PREVIOUS_SCREEN]: { screen: PreviousStack },
    [Routes.SEARCH_SCREEN]: { screen: SearchStack },
    [Routes.SETTINGS_SCREEN]: { screen: SettingsStack },
  },
  {
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    tabBarOptions: {
      upperCaseLabel: false,
      activeBackgroundColor: colors.TABBAR_BACKGROUND,
      inactiveBackgroundColor: colors.TABBAR_BACKGROUND,
      activeTintColor: colors.PRIMARY,
      inactiveTintColor: colors.PRIMARY_ALPHA_2,
      showIcon: true,
      showLabel: false,
      style: mainStyle.tabBarStyle,
      iconStyle: mainStyle.tabBarIconStyle,
      // labelStyle: mainStyle.tabBarLabelStyle
    },
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: navigation.state.routeName,
      tabBarTestID: `tab-btn-${navigation.state.routeName.replace(' ', '')}`,
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName = `home${focused ? '' : '-outline'}`;

        switch (routeName) {
          case Routes.SETTINGS_SCREEN: {
            iconName = `settings${focused ? '' : '-outline'}`;
            break;
          }
          case Routes.PREVIOUS_SCREEN: {
            iconName = `clock${focused ? '' : '-outline'}`;
            break;
          }
          case Routes.SEARCH_SCREEN: {
            iconName = `cloud-search${focused ? '' : '-outline'}`;
            break;
          }
          default:
          // iconName = `ios-search${focused ? '' : '-outline'}`;
        }

        //TODO: [mr] only remove one white space
        const lbl = `tab-btn-${routeName.replace(' ', '')}`;

        return (
          <View
            accessibilityLabel={lbl}
            testID={lbl}
            style={{
              alignItems: 'center',
              width: footerTabIconSize,
              height: footerTabIconSize,
            }}>
            <MaterialCommunityIcons
              name={iconName}
              size={footerTabIconSize}
              color={tintColor}
            />
          </View>
        );
      },
    }),
  }
);

export const RootNavigator = StackNavigator(
  {
    [Routes.APP_LOADING_SCREEN]: { screen: AppLoadingScreen },
    [Routes.HOME_SCREEN]: HomeNavigator,
  },
  {
    headerMode: 'none',
  }
);

export default RootNavigator;

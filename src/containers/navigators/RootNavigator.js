import React from 'react';
import { View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import { HeaderTitle } from '../../components/layout/HeaderTitle';
import { Routes } from '../../constants/routes';
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
  headerTitleStyle: mainStyle.headerTextTitleStyle,
  headerBackTitleStyle: mainStyle.headerTitleStyle,
  headerRight: null,
  headerLeft: null,
  // headerTransparent: true,
});

const HomeStack = createStackNavigator(
  {
    [Routes.HOME_SCREEN]: HomeScreen,
    [Routes.DETAILS_SCREEN]: { screen: DetailsScreen },
  },
  {
    defaultNavigationOptions: navOptions('tab-button-home'),
  }
);

const PreviousStack = createStackNavigator(
  {
    [Routes.PREVIOUS_SCREEN]: { screen: PreviousScreen },
    [Routes.DETAILS_SCREEN]: { screen: DetailsScreen },
  },
  {
    defaultNavigationOptions: navOptions,
  }
);

const SearchStack = createStackNavigator(
  {
    [Routes.SEARCH_SCREEN]: { screen: SearchScreen },
    [Routes.DETAILS_SCREEN]: { screen: DetailsScreen },
  },
  {
    defaultNavigationOptions: navOptions,
  }
);

const SettingsStack = createStackNavigator(
  {
    [Routes.SETTINGS_SCREEN]: SettingsScreen,
    [Routes.PRIVACY_POLICY_SCREEN]: PrivacyPolicyScreen,
    [Routes.CREDITS_SCREEN]: CreditsScreen,
  },
  {
    defaultNavigationOptions: navOptions,
  }
);

const HomeNavigator = createBottomTabNavigator(
  {
    [Routes.HOME_SCREEN]: HomeStack,
    [Routes.PREVIOUS_SCREEN]: PreviousStack,
    [Routes.SEARCH_SCREEN]: SearchStack,
    [Routes.SETTINGS_SCREEN]: SettingsStack,
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

    defaultNavigationOptions: ({ navigation }) => ({
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

export const RootNavigator = createSwitchNavigator(
  {
    [Routes.APP_LOADING_SCREEN]: AppLoadingScreen,
    [Routes.HOME_SCREEN]: HomeNavigator,
  },
  {
    headerMode: 'none',
    initialRouteName: Routes.APP_LOADING_SCREEN,
  }
);

export default RootNavigator;

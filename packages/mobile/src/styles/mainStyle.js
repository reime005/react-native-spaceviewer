import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import layout from '../constants/layout';
import {
  colors,
  fontSize,
  footerTabIconSize,
  headerFontSize,
  headerHeight,
  headerImageHeight,
  headerImageWidth,
  splashImageHeight,
  splashImageWidth,
} from '../constants/theme';

export default StyleSheet.create({
  headerStyle: {
    backgroundColor: colors.PRIMARY_ALPHA,
    height: 60,
  },
  headerTitleStyle: {
    flex: 1,
    textAlign: 'center',
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  headerTitleContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitleContainerText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: fontSize.TITLE,
    justifyContent: 'center',
  },
  headerImageStyle: {
    width: headerImageWidth * 1.15,
    height: headerImageHeight * 1.15,
  },
  headerTextTitleStyle: {
    // textTransform: 'uppercase',
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    width: '100%',
    fontSize: headerFontSize,
  },
  viewContainer: {
    width: '100%',
    flex: 1,
    backgroundColor: colors.BACKGROUND,
    padding: 5,
  },
  basicCenterContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  tabBarStyle: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '100%',
    padding: 0,
    margin: 0,
    justifyContent: 'center',
    height: layout.isSmallDevice
      ? footerTabIconSize * 2.5
      : footerTabIconSize * 2.25,
    backgroundColor: colors.TABBAR_BACKGROUND,
  },
  tabBarIconStyle: {
    width: '100%',
  },
  tabBarLabelStyle: {
    fontSize: layout.isSmallDevice ? wp('3%') : wp('2%'),
    width: '100%',
  },
  splashImage: {
    marginBottom: 50,
    alignSelf: 'center',
    width: splashImageWidth,
    height: splashImageHeight,
  },
  splashTitle: {
    alignSelf: 'center',
    width: splashImageWidth * 1.5,
    height: splashImageHeight * 1.5,
  },
});

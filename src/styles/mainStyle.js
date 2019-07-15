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
    position: 'absolute',
    width: '100%',
    backgroundColor: colors.PRIMARY_ALPHA,
    top: 0,
    left: 0,
    right: 0,
    color: 'white',
    fontWeight: 'bold',
    height: headerHeight,
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
    color: 'white',
    fontWeight: 'bold',
    width: '100%',
    fontSize: headerFontSize,
  },
  viewContainer: {
    flex: 1,
    backgroundColor: colors.BACKGROUND,
    paddingLeft: wp('1.5%'),
    paddingRight: wp('1.5%'),
    paddingBottom: wp('2%'),
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
    alignSelf: 'center',
    width: splashImageWidth,
    height: splashImageHeight,
  },
});

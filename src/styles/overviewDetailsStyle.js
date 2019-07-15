import { StyleSheet } from 'react-native';
import { colors, fontSize, wikiBadgeSize } from '../constants/theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import layout from '../constants/layout';

export default StyleSheet.create({
  modalContentent: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    borderRadius: 15,
    padding: layout.isSmallDevice ? 15 : 25,
  },
  modalStyle: {
    flex: 1,
  },
  title: {
    fontSize: fontSize.DETAILS_VIEW_TITLE,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: wp('3%'),
    paddingBottom: wp('3%'),
  },
  detailsInfoTextHeader: {
    backgroundColor: '#E0ECFE',
    alignItems: 'center',
    fontWeight: 'bold',
    // paddingTop: 0
  },
  contentContainer: {
    flexDirection: 'row',
  },
  tabContainer: {
    flex: 1,
    marginBottom: hp('20%'),
    paddingTop: wp('3%'),
  },
  tabsStyle: {
    borderWidth: 1,
    borderColor: colors.DARK_TEXT_SECONDARY,
  },
  tabStyle: {
    // padding: wp('3%'),
    alignItems: 'center',
    backgroundColor: '#f0f5ff',
  },
  tabContentStyle: {
    color: 'red',
    padding: wp('3%'),
    alignItems: 'center',
    backgroundColor: '#f0f5ff',
  },
  activeTabStyle: {
    backgroundColor: '#E0ECFE',
    color: 'red',
  },
  tabTextStyle: {
    color: colors.DARK_TEXT_PRIMARY,
  },
  tabActiveTextStyle: {
    fontWeight: 'bold',
    color: colors.DARK_TEXT_PRIMARY,
  },
  tabBarUnderlineStyle: {
    backgroundColor: colors.PRIMARY,
  },
  detailsInfoContainer: {
    flex: 1,
    justifyContent: 'center',
    // paddingBottom: wp('2%'),
    alignItems: 'center',
    flexDirection: layout.isSmallDevice ? 'column' : 'row',
  },
  detailsInfoTextContainer: {
    // flex: 1,
    width: layout.isSmallDevice ? '100%' : '45%',
    paddingLeft: layout.isSmallDevice ? 0 : wp('2%'),
    marginTop: layout.isSmallDevice ? wp('2%') : 0,
  },
  mapViewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapView: {
    width: layout.isSmallDevice ? wp('75%') : wp('85%'),
    height: layout.isSmallDevice ? wp('75%') : wp('85%'),
  },
  timerText: {
    textAlign: 'center',
    fontSize: layout.isSmallDevice ? wp('8%') : wp('3%'),
  },
  timerContainer: {
    flex: 1,
    height: layout.isSmallDevice ? hp('12%') : hp('6%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeContainerStyle: {
    width: wikiBadgeSize * 2.5,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: wikiBadgeSize * 0.25,
    padding: wikiBadgeSize * 0.25,
    paddingLeft: wikiBadgeSize * 0.75,
    paddingRight: wikiBadgeSize * 0.75,
    // borderWidth: wikiBadgeSize * 0.125,
    // borderColor: colors.WIKI_BORDER,
    borderRadius: wikiBadgeSize * 0.25,
    // backgroundColor: colors.WIKI_BACKGROUND
  },
  rocketContentContainer: {
    width: layout.isSmallDevice ? wp('90%') : wp('70%'),
    alignSelf: 'center',
  },
  missionContent: {
    width: '90%',
    alignSelf: 'center',
  },
  padContent: {
    marginLeft: wp('1%'),
    marginRight: wp('1%'),
    alignSelf: 'center',
  },
  agencyContent: {
    marginTop: wp('2%'),
    marginLeft: wp('2%'),
    marginRight: wp('2%'),
    marginBottom: wp('2%'),
  },
  cardItem: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

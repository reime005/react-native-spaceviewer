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
    paddingTop: 15,
    paddingBottom: 15,
  },
  detailsInfoTextHeader: {
    width: '100%',
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
    paddingTop: wp('3%'),
  },
  tabsStyle: {
    borderWidth: 1,
    borderColor: colors.DARK_TEXT_SECONDARY,
  },
  tabStyle: {
    alignItems: 'center',
    backgroundColor: '#f7faff',
  },
  tabContentStyle: {
    padding: wp('1%'),
    alignItems: 'center',
    backgroundColor: '#f7faff',
  },
  activeTabStyle: {
    backgroundColor: 'red',
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
    width: '100%',
    paddingTop: 16,
    flexDirection: 'row',
    paddingLeft: 5,
    paddingRight: 5,
  },
  detailsInfoTextContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  mapViewContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapView: {
    flex: 1,
    width: layout.isSmallDevice ? wp('75%') : wp('85%'),
    height: layout.isSmallDevice ? wp('75%') : wp('85%'),
  },
  timerText: {
    textAlign: 'center',
    fontSize: layout.isSmallDevice ? wp('5%') : wp('3%'),
  },
  timerContainer: {
    minHeight: 70,
    paddingTop: 5,
    paddingRight: 3,
    alignItems: 'center',
    justifyContent: 'flex-end',
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
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  titleStyle: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: fontSize.DETAILS_VIEW_TITLE,
    paddingTop: 4,
    paddingBottom: 4,
  },
  subTitleStyle: {
    color: 'grey',
    fontSize: fontSize.DETAILS_VIEW_SUBTITLE,
  },
});

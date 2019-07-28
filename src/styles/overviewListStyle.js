import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import layout from '../constants/layout';
import { colors } from '../constants/theme';

export default StyleSheet.create({
  flatList: {
    flex: layout.isSmallDevice ? 1 : 1,
    backgroundColor: colors.BACKGROUND,
    // paddingTop: headerBottomSpace * 1.125,
  },
  container: {
    height: layout.isSmallDevice ? 180 : 220,
    flex: 1,
    marginBottom: layout.isSmallDevice ? hp('2.25%') : hp('1%'),
    marginLeft: 5,
    marginRight: 5,
    padding: 25,
    borderRadius: 5,
    elevation: 2,
    shadowColor: colors.PRIMARY,
    shadowOpacity: 0.25,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    backgroundColor: colors.LIST_CONTAINER_BACKGROUND,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    // marginTop: 50,
  },
  title: {
    fontSize: layout.isSmallDevice ? wp('3.25%') : wp('2%'),
    color: colors.DARK_TEXT_PRIMARY,
    fontWeight: 'bold',
  },
  text: {
    flex: 1,
    fontSize: layout.isSmallDevice ? wp('2.6%') : wp('1.5%'),
    color: colors.DARK_TEXT_SECONDARY,
    margin: 6,
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
    marginLeft: 20,
  },
  listStyleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row',
  },
  smallTextIconContainer: {
    margin: 2,
  },
});

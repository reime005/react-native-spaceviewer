import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import layout from '../constants/layout';
import { colors } from '../constants/theme';

export default StyleSheet.create({
  flatList: {
    flex: layout.isSmallDevice ? 1 : 1,
    backgroundColor: colors.BACKGROUND,
    // paddingTop: headerBottomSpace * 1.125,
  },
  container: {
    flex: 1,
    marginBottom: wp('2%'),
    marginLeft: wp('1%'),
    marginRight: wp('1%'),
    padding: wp('2%'),
    borderRadius: wp('1.125%'),
    backgroundColor: colors.LIST_CONTAINER_BACKGROUND,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
    marginTop: wp('2%'),
  },
  title: {
    flex: 0.2,
    fontSize: layout.isSmallDevice ? wp('3%') : wp('2%'),
    color: colors.DARK_TEXT_PRIMARY,
    fontWeight: 'bold',
  },
  text: {
    flex: 0.8,
    fontSize: layout.isSmallDevice ? wp('2.5%') : wp('1.5%'),
    color: colors.DARK_TEXT_SECONDARY,
    margin: wp('0.75%'),
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flex: 1,
    paddingLeft: 10,
  },
  listStyleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row',
  },
  smallTextIconContainer: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});

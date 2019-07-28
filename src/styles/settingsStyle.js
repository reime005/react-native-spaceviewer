import { StyleSheet } from 'react-native';
import { colors, fontSize, headerBottomSpace } from '../constants/theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import layout from '../constants/layout';
import { fontFix } from '../lib/dimension';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 15,
  },
  headerStyle: {
    margin: 20,
    fontWeight: 'bold',
    fontSize: layout.isSmallDevice ? wp('5%') : wp('3%'),
    height: layout.isSmallDevice ? wp('8%') : wp('8%'),
    alignSelf: 'center',
    alignItems: 'flex-end',
    textAlign: 'center',
  },
  titleStyle: {
    fontSize: layout.isSmallDevice ? wp('5%') : wp('3%'),
    color: colors.DARK_TEXT_PRIMARY,
  },
  titleBoxStyle: {
    flex: 1,
    borderWidth: 0,
    paddingLeft: wp('5%'),
    paddingRight: wp('5%'),
    height: layout.isSmallDevice ? wp('14%') : wp('8%'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    paddingLeft: wp('5%'),
    alignSelf: 'center',
    alignItems: 'center',
  },
  pickerStyle: {
    width: '100%',
  },
  pickerContentStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pickerScrollViewStyle: {
    flex: 1,
    backgroundColor: 'white',
  },
  pickerText: {
    fontSize: fontFix(36),
  },
});

export const arrowStyle = {
  width: layout.isSmallDevice ? wp('10%') : wp('5%'),
  color: 'grey',
};

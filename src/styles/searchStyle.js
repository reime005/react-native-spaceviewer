import { StyleSheet } from 'react-native';
import { colors, fontSize, headerBottomSpace } from '../constants/theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import layout from '../constants/layout';
import { fontFix } from '../lib/dimension';

export default StyleSheet.create({
  searchFieldViewContainer: {
    flex: 1, 
    backgroundColor: colors.TOUCHABLE_UNDERLAY, 
    margin: wp('1.7%'),
    borderRadius: 3,
    paddingLeft: wp('3%'),
    paddingRight: wp('3%'),
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  searchIcon: {
    color: colors.PRIMARY_ALPHA
  },
  textInput: {
    flex: 1, 
    textDecorationLine: 'none',
    fontSize: fontSize.FORM_INPUT,
    marginLeft: wp('2%'), 
    marginRight: wp('2%'), 
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 0, 
    paddingRight: wp('2%')
  }
});
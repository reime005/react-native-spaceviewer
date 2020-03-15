import { StyleSheet } from 'react-native';
import { colors, fontSize, headerBottomSpace } from '../constants/theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import layout from '../constants/layout';
import { fontFix } from '../lib/dimension';

export default StyleSheet.create({
  searchFieldViewContainer: {
    flex: 1,
    display: 'flex',
    backgroundColor: colors.TOUCHABLE_UNDERLAY,
    margin: 15,
    borderRadius: 3,
    paddingLeft: 12,
    paddingRight: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '65%',
  },
  searchIcon: {
    color: 'grey',
  },
  textInput: {
    flex: 1,
    color: 'red',
    textDecorationLine: 'none',
    fontSize: fontSize.FORM_INPUT,
    margin: fontSize.FORM_INPUT * 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    // padding: fontSize.FORM_INPUT * 1.25,
  },
});

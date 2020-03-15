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
    height: layout.isSmallDevice ? 200 : 240,
    flex: 1,
    marginBottom: 8,
    marginLeft: 4,
    marginRight: 4,
    padding: 16,
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
    fontSize: 14,
    color: colors.DARK_TEXT_PRIMARY,
    fontWeight: 'bold',
  },
  text: {
    flex: 1,
    fontSize: 12,
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

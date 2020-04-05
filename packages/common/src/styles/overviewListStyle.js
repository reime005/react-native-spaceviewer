import { StyleSheet } from 'react-native';
import layout from '../constants/layout';
import { colors } from '../constants/theme';

export default StyleSheet.create({
  flatList: {
    flex: layout.isSmallDevice ? 1 : 1,
    backgroundColor: colors.BACKGROUND,
    // paddingTop: headerBottomSpace * 1.125,
  },
  container: {
    minHeight: 175,
    flex: 1,
    marginBottom: 8,
    marginLeft: 4,
    marginRight: 4,
    padding: 16,
    borderRadius: 5,
    elevation: 1,
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
    justifyContent: 'space-between',
    alignItems: 'center',
    display: 'flex',
    marginTop: 16,
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
    margin: 8,
  },
  icon: {
    width: 16,
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
    marginLeft: 24,
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

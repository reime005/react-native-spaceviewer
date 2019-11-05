import { StyleSheet } from 'react-native';
import { colors } from '../constants/theme';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import layout from '../constants/layout';

export default StyleSheet.create({
  missionsContainer: {},
  missionContainer: {},
  tabStyle: {
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: colors.COOL_GREY,
  },
});

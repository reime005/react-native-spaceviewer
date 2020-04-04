import React from 'react';

import { colors } from '../../constants/theme';
import { ActivityIndicator } from 'react-native';

export const CustomSpinner = () => (
  <ActivityIndicator size="large" color={colors.SPINNER} />
);

export default CustomSpinner;

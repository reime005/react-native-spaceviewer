import React, { useState } from 'react';
import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useHistory } from 'react-router-dom';
import { colors } from '../../constants/theme';
import { routes } from '../../router/routes';
import mainStyle from '../../styles/mainStyle';

const _AppLoadingScreen = () => {
  const [isFinished, setIsFinished] = useState(false);
  const { replace } = useHistory();

  return (
    <View
      style={{
        flex: 1,
        height: '100%',
        backgroundColor: colors.PRIMARY,
        justifyContent: isFinished ? 'center' : 'flex-end',
      }}
    >
      {!isFinished && (
        <Animatable.Image
          animation="bounceOutUp"
          duration={1000}
          delay={500}
          style={mainStyle.splashImage}
          onAnimationEnd={() => {
            setIsFinished(true);
          }}
          source={require('../../../../assets/images/splash.png')}
          resizeMode="contain"
        />
      )}
      {isFinished && (
        <Animatable.Image
          animation="bounceInDown"
          duration={1200}
          delay={0}
          style={mainStyle.splashTitle}
          onAnimationEnd={() => {
            replace(routes.home);
          }}
          source={require('../../../../assets/images/title.png')}
          resizeMode="contain"
        />
      )}
    </View>
  );
};

export const AppLoadingScreen = _AppLoadingScreen;

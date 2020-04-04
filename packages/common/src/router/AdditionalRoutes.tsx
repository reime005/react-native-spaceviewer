import React from 'react';
import WebView from 'react-native-webview';
import { DetailsContainer } from '../components';
import { BaseScreen } from '../containers/base/BaseScreen';
import { Route } from './Router';
import { routes } from './routes';
import { SettingsContainer } from '../components/container/SettingsContainer';

export const AdditionalRoutes = () => {
  return (
    <>
      <Route
        exact
        path={routes.privacy}
        render={() => (
          <BaseScreen>
            <WebView
              source={{
                uri: 'https://mariusreimer.com/privacy-policy',
              }}
              style={{ marginTop: 0 }}
            />
          </BaseScreen>
        )}
      />
      <Route
        exact
        path={routes.settings}
        render={() => (
          <BaseScreen>
            <SettingsContainer
              accessibilityLabel={'settings-screen'}
              testID={'settings-screen'}
            />
          </BaseScreen>
        )}
      />
      <Route
        exact
        path={routes.details}
        render={() => (
          <BaseScreen>
            <DetailsContainer
              accessibilityLabel={'details-screen'}
              testID={'details-screen'}
            />
          </BaseScreen>
        )}
      />
    </>
  );
};

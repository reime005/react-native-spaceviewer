import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar, Platform } from 'react-native';
import { Provider as ReduxProvider } from 'react-redux';
import { loadNextLaunchesSagaAction } from '../actions';
import { HomeContainer } from '../components/container/HomeContainer';
import { PreviousContainer } from '../components/container/PreviousContainer';
import { SearchContainer } from '../components/container/SearchContainer';
import { CreditsView } from '../components/views/CreditsView';
import { FILE_NEXT_LAUNCHES, FILE_PREV_LAUNCHES } from '../constants/files';
import { AppLoadingScreen } from '../containers/app/AppLoadingScreen';
import { BaseScreen } from '../containers/base/BaseScreen';
import { configureStore } from '../env/configureStore';
import { Route, Router } from './Router';
import { routes } from './routes';
import { theme, ThemeProvider } from './theme';
import { AdditionalRoutes } from './AdditionalRoutes';

const store = configureStore();

export const MainRouter = () => {
  useEffect(() => {
    store.dispatch(loadNextLaunchesSagaAction(FILE_NEXT_LAUNCHES));
    store.dispatch(loadNextLaunchesSagaAction(FILE_PREV_LAUNCHES));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.color.primary }}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme.color.primary}
        />

        <ReduxProvider store={store}>
          <Router>
            <Route
              exact
              path={routes.loading}
              render={() => <AppLoadingScreen />}
            />
            <Route
              exact
              path={routes.home}
              render={() => (
                <BaseScreen>
                  <HomeContainer
                    accessibilityLabel={'upcoming-screen'}
                    testID={'upcoming-screen'}
                  />
                </BaseScreen>
              )}
            />
            <Route
              exact
              path={routes.previous}
              render={() => (
                <BaseScreen>
                  <PreviousContainer
                    accessibilityLabel={'previous-screen'}
                    testID={'previous-screen'}
                  />
                </BaseScreen>
              )}
            />
            <Route
              exact
              path={routes.search}
              render={() => (
                <BaseScreen>
                  <SearchContainer
                    accessibilityLabel={'search-screen'}
                    testID={'search-screen'}
                  />
                </BaseScreen>
              )}
            />
            <Route
              exact
              path={routes.credits}
              render={() => (
                <BaseScreen>
                  <CreditsView />
                </BaseScreen>
              )}
            />

            <AdditionalRoutes />
          </Router>
        </ReduxProvider>
      </SafeAreaView>
    </ThemeProvider>
  );
};

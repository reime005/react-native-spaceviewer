import React, { useEffect } from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { Provider as ReduxProvider } from "react-redux";
import { loadNextLaunchesSagaAction } from "../actions";
import { HomeContainer } from "../components/container/HomeContainer";
import { PreviousContainer } from "../components/container/PreviousContainer";
import { SearchContainer } from "../components/container/SearchContainer";
import { SettingsContainer } from "../components/container/SettingsContainer";
import { CreditsView } from "../components/views/CreditsView";
import { FILE_NEXT_LAUNCHES, FILE_PREV_LAUNCHES } from "../constants/files";
import { AppLoadingScreen } from "../containers/app/AppLoadingScreen";
import { BaseScreen } from "../containers/base/BaseScreen";
import { configureStore } from "../env/configureStore";
import { Route, Router } from "./Router";
import { routes } from "./routes";
import { theme, ThemeProvider } from "./theme";

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
                  <HomeContainer />
                </BaseScreen>
              )}
            />
            <Route
              exact
              path={routes.previous}
              render={() => (
                <BaseScreen>
                  <PreviousContainer />
                </BaseScreen>
              )}
            />
            <Route
              exact
              path={routes.search}
              render={() => (
                <BaseScreen>
                  <SearchContainer />
                </BaseScreen>
              )}
            />
            <Route
              exact
              path={routes.settings}
              render={() => (
                <BaseScreen>
                  <SettingsContainer />
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
            <Route
              exact
              path={routes.privacy}
              render={() => (
                <BaseScreen>
                  {/* <WebView
                    source={{ uri: "https://mariusreimer.com/privacy-policy" }}
                    style={{ marginTop: 0 }}
                  /> */}
                </BaseScreen>
              )}
            />
          </Router>
        </ReduxProvider>
      </SafeAreaView>
    </ThemeProvider>
  );
};

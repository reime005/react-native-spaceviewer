import React from "react";
import { Text } from "react-native";
import { BaseScreen } from "../containers/base/BaseScreen";
import { Route } from "./Router";
import { routes } from "./routes";

export const AdditionalRoutes = () => {
  return (
    <>
      <Route
        exact
        path={routes.privacy}
        render={() => (
          <BaseScreen>
            <Text>Not yet implemented</Text>
          </BaseScreen>
        )}
      />
      <Route
        exact
        path={routes.details}
        render={() => (
          <BaseScreen>
            <Text>Not yet implemented</Text>
          </BaseScreen>
        )}
      />
      <Route
        exact
        path={routes.settings}
        render={() => (
          <BaseScreen>
            <Text>Not yet implemented</Text>
          </BaseScreen>
        )}
      />
    </>
  );
};

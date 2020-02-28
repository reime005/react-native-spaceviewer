import React from 'react'
import { Text } from 'react-native'
import { Test } from './Test'
import { Route, Router, Switch } from "./Router";

export const MainRouter = (props: any) => {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/" component={() => <Text>af</Text>} /> */}
        <Route exact path="/" component={Test} />
      </Switch>
    </Router>
  )
}

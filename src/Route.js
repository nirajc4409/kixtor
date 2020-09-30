import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Dashboard from './scenes/dashboard/Dashboard'

const Routes = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Dashboard} />
    </Switch>
  </HashRouter>
)

export default Routes

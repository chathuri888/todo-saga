import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import Home from '../pages/App'
import Login from '../pages/Login'
import history from '../history'

const App = () => {
  return (
    <>
      <Router history={history}>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/" component={Login} />
        </Switch>
      </Router>
    </>
  )
}

export default App

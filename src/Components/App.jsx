import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './Navbar'
import * as routes from '../Constants/routes'
import Landing from './Landing'
import Dashboard from './Dashboard'
import SignIn from './AuthComponents/SignIn'
import SignUp from './AuthComponents/SignUp'
import Secret from './Secret'

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
      <Route
        path="/(.+)"
        render={() => (
          <div>
            <Navbar />
            <Switch>
              <Route path={routes.DASHBOARD} component={Dashboard} />
              <Route path={routes.SIGN_UP_PAGE} component={SignIn} />
              <Route path={routes.SIGN_IN_PAGE} component={SignUp} />
              <Route path={routes.SECRET_PAGE} component={Secret} />
            </Switch>
          </div>
        )}
      />
    </div>
  )
}

export default App

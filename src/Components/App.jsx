import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import * as routes from '../Constants/routes'
import Landing from './Landing'
import Dashboard from './Dashboard'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Secret from './Secret'

const App = () => {
  return <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
        <Route path="/(.+)" render={() => <div>
              <Navbar />
              <Switch>
                <Route path={routes.DASHBOARD} component={Dashboard} />
                <Route path={routes.SIGN_UP} component={SignUp} />
                <Route path={routes.SIGN_IN} component={SignIn} />
                <Route path={routes.SECRET} component={Secret} />
              </Switch>
            </div>} />
      </div>
    </BrowserRouter>
}

export default App

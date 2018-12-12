import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import { DASHBOARD, SIGN_UP, SIGN_IN } from '../Constants/routes'
import Landing from './Landing'
import Dashboard from './Dashboard'
import SignIn from './AuthComponents/SignIn'
import SignUp from './AuthComponents/SignUp'

const App = () => {
  return <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
        <Route path="/(.+)" render={() => <div>
              <Navbar />
              <Switch>
                <Route path={DASHBOARD} component={Dashboard} />
                <Route path={SIGN_UP} component={SignUp} />
                <Route path={SIGN_IN} component={SignIn} />
              </Switch>
            </div>} />
      </div>
    </BrowserRouter>
}

export default App

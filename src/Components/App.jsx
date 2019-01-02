import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import {
  DASHBOARD,
  SIGN_UP,
  SIGN_IN,
  PROJECT_DETAIL,
  CREATE_PROJECT,
} from '../Constants/routes'
import Landing from './Landing'
import Dashboard from './Dashboard'
import SignIn from './AuthComponents/SignIn'
import SignUp from './AuthComponents/SignUp'
import ProjectDetail from './ProjectDetail'
import CreateProject from './Createproject'

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
                <Route path={PROJECT_DETAIL} component={ProjectDetail} />
                <Route path={SIGN_UP} component={SignUp} />
                <Route path={SIGN_IN} component={SignIn} />
                <Route path={CREATE_PROJECT} component={CreateProject} />
              </Switch>
            </div>} />
      </div>
    </BrowserRouter>
}

export default App

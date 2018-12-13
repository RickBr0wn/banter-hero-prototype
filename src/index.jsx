import React from 'react'
import ReactDOM from 'react-dom'
// import 'semantic-ui-css/semantic.min.css'
// import '../semantic/dist/semantic.min.css'
import './index.css'
import './CSS/navbar.css'
import './CSS/form.css'
import './CSS/hero.css'
import './CSS/dashboard.css'
import App from './Components/App'
import * as serviceWorker from './serviceWorker'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './Store/Reducers/rootReducer'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import fbConfig from './Store/Config/fbConfig'

const reduxDevToolsExtension =
  window.devToolsExtension && window.devToolsExtension()

const rootElement = document.getElementById('root')

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig, { useFirestoreForProfile: true, userProfile: 'users', attachAuthIsReady: true }),
    // comment the line below to test on Safari
    // remove for production
    // reduxDevToolsExtension
  )
)

let render = () => {
  ReactDOM.render(<Provider store={store}>
      <App />
    </Provider>, rootElement)
}

if (module.hot) {
  module.hot.accept('./Components/App', () => {
    setTimeout(render)
  })
}

render()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()


// https://luisalonso.me/wp-content/uploads/2016/05/banter-top-1296x650.jpg

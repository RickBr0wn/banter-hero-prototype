import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './CSS/navbar.css'
import './CSS/form.css'
import './CSS/hero.css'
import './CSS/dashboard.css'
import App from './Components/App'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './Store/Reducers/rootReducer'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import fbConfig from './Store/Config/fbConfig'

const reduxDevToolsExtension =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const rootElement = document.getElementById('root')

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig, {
      useFirestoreForProfile: true,
      userProfile: 'users',
      attachAuthIsReady: true,
    }),
    reduxDevToolsExtension
  )
)

store.firebaseAuthIsReady.then(() => {
  let render = () => {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      rootElement
    )
  }

  if (module.hot) {
    module.hot.accept('./Components/App', () => {
      setTimeout(render)
    })
  }

  render()
})

// https://luisalonso.me/wp-content/uploads/2016/05/banter-top-1296x650.jpg

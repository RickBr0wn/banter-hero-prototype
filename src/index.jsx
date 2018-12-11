import React from 'react'
import ReactDOM from 'react-dom'
// import 'semantic-ui-css/semantic.min.css'
// import '../semantic/dist/semantic.min.css'
import './index.css'
import App from './Components/App'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter } from 'react-router-dom'

const rootElement = document.getElementById('root')

let render = ( )=> {
  ReactDOM.render(<BrowserRouter>
      <App />
    </BrowserRouter>, rootElement)
}

if(module.hot) {
  module.hot.accept('./Components/App', () => {
    setTimeout(render)
  })
}

render()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
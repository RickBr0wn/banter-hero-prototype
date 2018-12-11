import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
import authReducer from './authReducer'
// import banterReducer from './banterReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  // banter: banterReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
})

export default rootReducer

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyC4yoc1B4lit_H6H0daKKybIHLXyFh8AH4',
  authDomain: 'mario-planner.firebaseapp.com',
  databaseURL: 'https://mario-planner.firebaseio.com',
  projectId: 'mario-planner',
  storageBucket: 'mario-planner.appspot.com',
  messagingSenderId: '668089638177',
}

firebase.initializeApp(config)
firebase.firestore().settings({})

export default firebase

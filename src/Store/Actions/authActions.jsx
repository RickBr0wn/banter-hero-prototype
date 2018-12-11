export const signIn = credentials => async (
  dispatch,
  getState,
  { getFirebase }
) => {
  const firebase = getFirebase()
  firebase
    .auth()
    .signInWithEmailAndPassword(credentials.email, credentials.password)
    .then(() => dispatch({ type: 'LOGIN_SUCCESS' }))
    .catch(err => dispatch({ type: 'LOGIN_ERROR', err }))
}

export const signOut = () => async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase()
  firebase
    .auth()
    .signOut()
    .then(() => dispatch({ type: 'SIGNOUT_SUCESS' }))
}

export const signUp = newUser => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = getFirebase()
  const firestore = getFirestore()
  const obj = {
    firstName: newUser.firstName,
    lastName: newUser.lastName,
    initials: newUser.firstName[0] + newUser.lastName[0],
  }
  firebase
    .auth()
    .createUserWithEmailAndPassword(newUser.email, newUser.password)
    .then(response =>
      firestore
        .collection('users')
        .doc(response.user.uid)
        .set(obj)
    )
    .then(() => dispatch({ type: 'SIGNUP_SUCCESS' }))
    .catch(err => dispatch({ type: 'SIGNUP_ERROR', err }))
}

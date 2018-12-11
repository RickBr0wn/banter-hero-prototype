const initState = {
  authError: null,
}

const authReducer = (state = initState, { type, err }) => {
  switch (type) {
    case 'LOGIN_ERROR':
      console.log('login error')
      return {
        ...state,
        authError: err.message,
      }

    case 'LOGIN_SUCCESS':
      console.log('login success')
      return {
        ...state,
        authError: null,
      }

    case 'SIGNOUT_SUCCESS':
      console.log('signout success')
      return state

    case 'SIGNUP_SUCCESS':
      console.log('signup success')
      return {
        ...state,
        authError: null,
      }

    case 'SIGNUP_ERROR':
      console.log('signup error')
      return {
        ...state,
        authError: err.message,
      }

    default:
      return state
  }
}

export default authReducer

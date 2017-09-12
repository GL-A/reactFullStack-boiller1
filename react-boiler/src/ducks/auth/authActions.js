import axios from 'axios';

export function signUp(signee){
  delete signee.reEnterEmail
  delete signee.reEnterPassword
  return dispatch => {
    dispatch({type: 'Loading'})
    axios.post('/api/signup', signee).then(signInRes => {
      if(signInRes.data === 'emailFound'){
        dispatch({
          type: 'AUTH_EXISTS'
        })
      } else {
        const token = signInRes.headers['x-auth'];
        localStorage.setItem('KS-token', token)
        dispatch({
          type: 'AUTH_SUCCESS',
          payload: signInRes
        })
      }
    }).catch(err => dispatch({type: 'AUTH_ERROR'}))
  }
}

export function logIn(signee){
  return dispatch => {
    dispatch({type: 'Loading'})
    axios.post('/api/login', signee).then(loginRes => {
      const token = loginRes.headers['x-auth'];
      localStorage.setItem('KS-token', token)
      dispatch({type: 'AUTH_SUCCESS'})
    }).catch(err => {
      dispatch({type: 'AUTH_ERROR'})
    })
  }
}

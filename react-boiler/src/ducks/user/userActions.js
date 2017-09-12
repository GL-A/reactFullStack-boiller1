import axios from 'axios';
export function getUser(payload) {
  const token = localStorage.getItem('KS-token');
  if(token){
    return dispatch => {
      axios.get('/api/getUser', {headers: {'x-auth': token}})
      .then( userFetch => {
        dispatch({
          type: 'GET_USER',
          payload: userFetch.data
        })
      }).catch( err => dispatch({type: 'GET_USER_ERROR'}))
    }
  } else {
    return dispatch => {
      dispatch({
        type: 'NO_USER'
      })
    }
  }
}

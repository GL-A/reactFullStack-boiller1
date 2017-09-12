// import axios from 'axios';
const AUTH_SUCCESS = "AUTH_SUCCESS";
const AUTH_ERROR = "AUTH_ERROR";
const AUTH_EXISTS = "AUTH_EXISTS";
// const AUTH_LOADING = "Loading";
const initialState = {

};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {signin: true}
    case AUTH_EXISTS:
      return {userExists: true};
    case AUTH_ERROR:
      return {failedAuth: true}
    default:
      return state
  }
}

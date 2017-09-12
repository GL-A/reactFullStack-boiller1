const GET_USER = "GET_USER";
const NO_USER = 'NO_USER';
const initialState = {
  user: null,
  email: null,
  name: null
};
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return Object.assign({}, state, {
        name: action.payload.name,
        email: action.payload.email,
        user: true
      })
    case NO_USER:
      return state
    default:
      return initialState;
  }
}

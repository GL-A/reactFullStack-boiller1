const PROJECT_INIT = "PROJECT_INIT"
, CLOUDINARY_UPLOAD_URL = 'CLOUDINARY_UPLOAD_URL'
, HANDLE_TITLE_CHANGE = 'HANDLE_TITLE_CHANGE'
, HANDLE_CAT_CHANGE = 'HANDLE_CAT_CHANGE'
, HANDLE_BLURB_UPDATE = 'HANDLE_BLURB_UPDATE'
, HANDLE_LOCATION_UPDATE = 'HANDLE_LOCATION_UPDATE'
, HANDLE_FUNDING_DURATION_UPDATE = 'HANDLE_FUNDING_DURATION_UPDATE'
, HANDLE_FUNDING_GOAL_UPDATE = 'HANDLE_FUNDING_GOAL_UPDATE'
, initialState = {
    title: '',
    goal: 0,
    blurb: '',
    funding_duration: '',
    location: '',
    country: 'United States',
    category: '',
    img_url: ''
};
export default function project(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case PROJECT_INIT:
      return Object.assign({}, state, {...action.payload})
    case CLOUDINARY_UPLOAD_URL:
      console.log( 'CLOUDINARY_UPLOAD_URL')
      return Object.assign({}, state, {img_url: action.payload})
    case HANDLE_TITLE_CHANGE:
      return Object.assign({}, state, {title: action.payload});
    case HANDLE_CAT_CHANGE:
      return Object.assign({}, state, {category: action.payload})
    case HANDLE_BLURB_UPDATE:
      return Object.assign({}, state, {blurb: action.payload});
    case HANDLE_FUNDING_DURATION_UPDATE:
    console.log( action )
      return Object.assign({}, state, {funding_duration: action.payload});
    case HANDLE_LOCATION_UPDATE:
      console.log(action)
      return Object.assign({}, state, {location: action.payload})
    case HANDLE_FUNDING_GOAL_UPDATE:
      console.log(action)
      return Object.assign({}, state, {goal: action.payload})
    default:
      return state;
  }
}

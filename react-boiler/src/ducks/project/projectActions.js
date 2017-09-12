import request from 'superagent';
const CLOUDINARY_UPLOAD_PRESET = 'clkfzomi';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/swiftcode-design/upload';

export function projectStart(payload) {
  console.log('projectStart action');
  return {
    type: 'PROJECT_INIT',
    payload
  };
}
export function handleImageUpload(files){
  let upload = request.post(CLOUDINARY_UPLOAD_URL)
  .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
  .field('file', files[0]);
  return dispatch => {
    upload.end((err, response) => {
      if(err){
        dispatch({
          type: 'CLOUDINARY_UPLOAD_URL_ERROR'
        })
      }
      if(response.body.secure_url !== ''){
        dispatch({
          type: 'CLOUDINARY_UPLOAD_URL',
          payload:response.body.secure_url
        })
      }
    })
  }
}
export function handleTitleChange(e){
  return{
    type: 'HANDLE_TITLE_CHANGE',
    payload: e.target.value
  }
}

export function handleCatChange(e){
  console.log(e)
  return {
    type: 'HANDLE_CAT_CHANGE',
    payload: e
  }
}

export function handleBlurbUpdate(e){

  return{
    type: 'HANDLE_BLURB_UPDATE',
    payload: e.target.value
  }
}
export function handleLocationUpdate(e){
  return {
    type: 'HANDLE_LOCATION_UPDATE',
    payload: e.target.value
  }
}
export function handleFundingDuration(e){
  return{
    type: 'HANDLE_FUNDING_DURATION_UPDATE',
    payload: e.target.value
  }
}

export function handleFundingGoalUpdate(e){
  return{
    type: 'HANDLE_FUNDING_GOAL_UPDATE',
    payload: e.target.value
  }
}

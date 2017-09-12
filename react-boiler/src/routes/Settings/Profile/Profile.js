import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
const CLOUDINARY_UPLOAD_PRESET = 'clkfzomi';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/swiftcode-design/upload';

class Comp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uploadedFileCloudinaryUrl: ''
    };
  }
  onImageDrop(files){
    // this.setState({
    //   console.log(files)
    //   uploadedFile: files[0]
    // })
    this.handleImageUpload(files[0])
  }
  handleImageUpload(file){
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
    .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
    .field('file', file);
    upload.end((err, response) => {
      if(err){
        console.log(err)
      }
      if(response.body.secure_url !== ''){
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        })
      }
    })
  }
  render() {
    console.log(this.state)
    return(
      <div>
        <Dropzone
          multiple={false}
          accept="image/*"
          onDrop={this.onImageDrop.bind(this)}>
           <p>Drop an image or click to select file to upload</p>
         </Dropzone>
         <div>
           <div>
             {this.state.uploadedFileCloudinaryUrl === '' ? null :
            <div>
              {/* <p>{this.state.uploadedFile.name}</p> */}
              <img alt="some alt" src={this.state.uploadedFileCloudinaryUrl} />
            </div>}
          </div>
         </div>
      </div>
    );
  }
}
export default Comp;

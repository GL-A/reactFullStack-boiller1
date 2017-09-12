import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from './../../../components/Select';
import { handleImageUpload, handleTitleChange, handleCatChange, handleBlurbUpdate, handleFundingDuration, handleLocationUpdate, handleFundingGoalUpdate } from './../../../ducks/project/projectActions';
import Dropzone from 'react-dropzone';
import './Creation.css';
import { DatePicker, Icon } from 'antd';





class Creation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props)
    return(
      <div className='Creation center'>
        <div className="center" style={{background: 'pink', height: '120px'}}>
          <div>hello</div>
        </div>
        <ProjectCreationsForms
          project={this.props.project}
          handleFundingGoalUpdate={this.props.handleFundingGoalUpdate}
          handleLocationUpdate={this.props.handleLocationUpdate}
          handleFundingDuration={this.props.handleFundingDuration}
          handleBlurbUpdate={this.props.handleBlurbUpdate}
          handleCatChange={this.props.handleCatChange}
          handleTitleChange={this.props.handleTitleChange}
          handleImageUpload={this.props.handleImageUpload}/>
      </div>
    );
  }
}

export default connect(({project, user})=> ({
  project, user

}), {
    handleImageUpload
  , handleTitleChange
  , handleCatChange
  , handleBlurbUpdate
  , handleFundingDuration
  , handleFundingGoalUpdate
  , handleLocationUpdate
})(Creation);

function ProjectCreationsForms(props){
  console.log(props)
  return(
    <div style={{padding: '17px', position: 'relative', width: '830px'}} className="align-flex-start">
      <div className="create-form-container">
        <ul className="center create-ul">
          <li className="space-between create-li" >
            <h4>Project Image</h4>
            <DropZone
              img={props.project.img_url}
              handleImageUpload={props.handleImageUpload}/>
          </li>
          <li className="space-between create-li" >
            <h4>Project title</h4>
            <input onChange={props.handleTitleChange} value={props.project.title} className="project-title-input" maxLength="60"></input>
          </li>
          <li className="space-between create-li" >
            <h4>Short blurb title</h4>
            <textarea onChange={props.handleBlurbUpdate} value={props.project.blurb} className='project-title-textarea' />
          </li>
          <li className="space-between create-li">
            <h4>Category</h4>
            <Select
              defaultValue={props.project.category}
              selectStyle={{width: '320px'}}
              update={props.handleCatChange}
              array={['Art', 'Comics', 'Crafts', 'Dance','Design', 'Fashion', 'Film & Video', 'Food', 'Journalism', 'Music', 'Technology', 'Theater']} />
          </li>
          <li className="space-between create-li" >
            <h4>Project location</h4>
            <input onChange={props.handleLocationUpdate} placeholder="zipcode" type="text" className="project-title-input" minLength="5" maxLength="5"></input>
          </li>
          <li className="space-between create-li">
            <h4>Funding duration</h4>
            <input onChange={props.handleFundingDuration} placeholder="funding duration" type="number" className="project-title-input"></input>
          </li>
          <li className="space-between create-li">
            <h4>Funding goal ($)</h4>
            <input onChange={props.handleFundingGoalUpdate}  className="project-title-input"/>
          </li>
        </ul>
        <ul className="create-ul">
          <li>test</li>
        </ul>
      </div>

      <div className="align-flex-start creation-project-preview">
        <div>
          <p>How to:</p>
          <p>Make an awesome project</p>
        </div>
        <div>
          <h5>Need advice?</h5>
          <p>Visit a Campus to readt discussions about</p>
          <p>preparing for a project and more.</p>
        </div>
        <div>
          <DropZone
            img={props.project.img_url}
            handleImageUpload={props.handleImageUpload}/>
          <p>{props.project.title.length ? props.project.title : 'Untitled' }</p>
          <div className="flex-start">
            <p>{props.project.location.length ? props.project.location : null}</p>
            <Icon type="environment" />

          </div>
        </div>

      </div>
    </div>
  )
}

function DropZone(props) {
    return(
      <div>
        {!props.img ?
          <Dropzone
            multiple={false}
            accept="image/*"
            onDrop={props.handleImageUpload}>
             <p>Drop an image or click to select file to upload</p>
           </Dropzone>
           :
           <div
             style={{width: '200px',height: '180px',background: `url(${props.img})`,backgroundSize: 'cover',backgroundPosition: 'center',backgroundRepeat: 'no-repeat' }}>
           </div>
        }
      </div>
    );
}

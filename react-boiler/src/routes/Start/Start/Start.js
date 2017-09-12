import React, { Component} from 'react';
import { connect } from 'react-redux';
import { projectStart } from './../../../ducks/project/projectActions';
import { Link } from 'react-router-dom';
import './Start.css';
import { Select } from 'antd';
const Option = Select.Option;
class Start extends Component{
  constructor(props){
    super(props);
    this.state={
      category: '',
      title: '',
      country: 'United States'
    }
    this.updateCountry = this.updateCountry.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateCategory = this.updateCategory.bind(this);
    this.saveAndContinue = this.saveAndContinue.bind(this);
  }
  updateCountry(value){
    this.setState({country: value})
  }
  updateTitle(e){
    this.setState({title: e.target.value})
  }
  updateCategory(value){
    this.setState({category: value})
  }
  saveAndContinue(){
    this.props.projectStart(this.state);
    this.props.history.push('/creation');
  }
    render(){
      console.log(this.state)
      return(
        <div className="Start-container">
          <div className="start-top center">
            <div className="start-top-form center">
              <h1 >Get Stared</h1>
              <Startform
                projectInfo={this.state}
                updateResidence={this.updateCountry}
                updateTitle={this.updateTitle}
                updateCategory={this.updateCategory}
                save={this.saveAndContinue}/>
            </div>
          </div>
          <div style={{background:'pink'}}>
          creater handbook
          </div>
        </div>
      );
    }
}
export default connect(({project}) => ({
   project
}), { projectStart })(Start);

function Startform(props){
  console.log(props)
  return(
    <ul className="center">
      <li className="start-form-li center" style={{position: 'relative'}}>
        <div style={{background: 'white'}}>
          <h3 style={{paddingBottom: '15px'}}>
            Choose a category
          </h3>
          <Select
            onChange={(value) => props.updateCategory(value)}
            showSearch
            optionFilterProp="children"
            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            placeholder="Select a category"
            size="large"
            style={{width: '100%', fontSize: '20px'}}
            >
            {['Art', 'Comics', 'Crafts', 'Dance','Design', 'Fashion', 'Film & Video', 'Food', 'Journalism', 'Music', 'Technology', 'Theater']
            .map((cat, idx) => (
              <Option value={cat.toLowerCase()} key={idx}>{cat}</Option>
            ))}
          </Select>
        </div>
      </li>
      <li className='start-form-li center'>
        <div style={{background: 'white'}}>
          <h3 >
            Give your project a title:
          </h3>
          <input value={props.projectInfo.title} onChange={props.updateTitle} placeholder="title..." style={{borderBottom: 'solid 1px black'}} />
        </div>
      </li>
      <li className='start-form-li center'>
        <div style={{background: 'white'}}>
          <h3 style={{paddingBottom: '15px'}}>
            Your pemanent residence
          </h3>
          <Select
            onChange={(value) => props.updateResidence(value)}
            showSearch
            optionFilterProp="children"
            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            placeholder="Select a category"
            size="large"
            defaultValue={props.projectInfo.country}
            style={{width: '170px', fontSize: '20px'}}
            >
            {['United States', 'Mexico', 'Denmark', 'Brazil']
            .map((cat, idx) => (
              <Option value={cat.toLowerCase()} key={idx}>{cat}</Option>
            ))}
          </Select>
        </div>
      </li>
      <li className='start-form-li center'>
        <Link to='/creation'>Save and continue</Link>
      </li>
    </ul>
  )
}

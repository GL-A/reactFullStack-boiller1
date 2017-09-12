import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputForm from './../InputForm';
import { logIn } from './../../../ducks/auth/authActions';
import { getUser } from './../../../ducks/user/userActions';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        email: '',
        password: ''
      },
      inputs: ['email', 'password']
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e, key){
    const updatedForm = Object.assign({}, this.state.form)
    updatedForm[key] = e.target.value;
    this.setState({form: updatedForm})
  }
  handleSubmit(){
    this.props.logIn(this.state.form)
  }
  componentWillReceiveProps(nextProps){
    const userLogged = nextProps.userLogged;
    if(userLogged.signin){
      this.props.getUser();
      this.setState({form: {email: '',password: ''}})
      this.props.history.push('/')
    }
    if(userLogged.userExists){alert('email is already taken')}
    if(userLogged.failedAuth){alert('oops, something went wrong')}
  }
  render() {
    console.log(this.state.form)
    return(
      <div className="signup-container center">
        <InputForm
          inputType='Log in'
          inputs={this.state.inputs}
          form={this.state.form}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}/>
      </div>
    );
  }
}

export default connect((state)=> ({
  userLogged: state.auth
}), { logIn, getUser })(Login);

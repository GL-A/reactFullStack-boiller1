import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import InputForm from './../InputForm';
import validator from 'email-validator';
import { signUp } from './../../../ducks/auth/authActions';
import { getUser } from './../../../ducks/user/userActions';
import './Signup.css';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: '',
        email: '',
        reEnterEmail: '',
        password: '',
        reEnterPassword:''
      },
      inputs: ['Name', 'Email', 'Re-enter email', 'Password', 'Re-enter password']
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e, key){
    const updatedForm = Object.assign({}, this.state.form)
    updatedForm[key] = e.target.value;
    this.setState({form: updatedForm})
  }
  handleSubmit(){
    const password = this.state.form.password;
    const validPassword = password === this.state.form.reEnterPassword && password.length > 6;
    const validEmail = validator.validate(this.state.form.email) && this.state.form.email === this.state.form.reEnterEmail;
    console.log(this.state.form)
    if(validEmail && validPassword){
      alert('all good')
      this.props.signUp({...this.state.form})
    } else {
      alert('make sure email is valid and that both entries match')
    }
  }
  componentWillReceiveProps(nextProps){
    const userCreated = nextProps.userCreated;
    if(userCreated.signin){
      this.props.getUser();
      this.setState({form: {name: '',email: '',reEnterEmail: '',password: '',reEnterPassword:''}})
      this.props.history.push('/')
    }
    if(userCreated.userExists){alert('email is already taken')}
    if(userCreated.failedAuth){alert('oops, something went wrong')}
  }
  render() {
    return(
      <div className="signup-container">
        <div style={{height: '65px', borderBottom: 'solid 1px #DAD7D4'}} className="center">
          <p>Have an account?</p><Link className="Link" to="/login">&nbsp;Log in</Link>
        </div>
        <InputForm
          inputType="Sign up"
          inputs={this.state.inputs}
          form={this.state.form}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          />
      </div>
    );
  }
}

export default connect((state)=> ({
  userCreated: state.auth
}), { signUp, getUser })(Signup);

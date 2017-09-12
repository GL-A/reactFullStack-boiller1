import React from 'react';
import { Link } from 'react-router-dom';

function SignupForm(props){
  const form = Object.keys(props.form)
  return(
    <div style={{'width': '90%', margin: '0 auto'}}>
      <h3 style={{fontSize: '24px', fontWeight:'light', padding: '10px 0'}}>{props.inputType}</h3>
      {props.inputs.map( (input, i, arr) => {
        return <input key={i} value={props.form[i]} onChange={(e)=>props.handleChange(e, form[i])} placeholder={input} className="signup-input"/>
      })}
      <div style={{fontSize: '12px', padding: '10px 0'}} className="space-between"><input style={{paddingRight: '10px'}} type="checkbox"/>
        <p>Receive our weekly newsletter and other occasional updates</p>
      </div>
      <button onClick={props.handleSubmit} className="create-account-btn">Create account</button>
      <p style={{fontSize: '12px'}}>By signing up, you agree to our <Link to="/cookiepolicy">terms of use, piracy policy, </Link>and<Link to="/cookiepolicy">&nbsp;cookie policy.</Link></p>
    </div>
  )
}
export default SignupForm;

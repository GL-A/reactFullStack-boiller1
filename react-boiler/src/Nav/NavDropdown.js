import React from 'react';
export default function NavDropDown(){
  return (
    <div className="nav-dropdown">
      <ul >
        {['My Stuff h3','Follow creators','Recommended','Recommended','Messages','Profile','Backed projects','Saved projects','Settings h3','Account','Edit Profile']
        .map( (e, i) => {
            if( e.includes('h3')){
              return <li key={i} className='nav-dropdown-header'><h3>{e.replace('h3', '')}</h3></li>
            }
            return <li key={i} className='nav-dropdown-item'><p>{ e }</p></li>
        })}
      </ul>
      <div className="nav-dropdown-footer" >
        <h5>You're logged in as George Lopez</h5>
        <p>Log out</p>
      </div>
    </div>
  )
}

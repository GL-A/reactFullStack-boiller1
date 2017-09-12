import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import './Routes.css';
import Home from './routes/Home/Home';
import Login from './routes/Auth/Login/Login';
import Signup from './routes/Auth/Signup/Signup';
import Learn from './routes/Start/Learn/Learn';
import Start from './routes/Start/Start/Start';
import Creation from './routes/Start/Creation/Creation';
import Profile from './routes/Settings/Profile/Profile';



function Wrapper(props){
  // console.log('props', props)
  return (
      <div >
        <Nav history={ props.history }/>
        <div  className="Routes center-vertical">
          <Switch >
            <Route exact path="/" component={Home} />
            <Route  path="/login" component={Login} />
            <Route  path="/signup" component={Signup} />
            <Route path="/learn" component={Learn} />
            <Route path="/start" component={Start} />
            <Route path="/creation" component={Creation}/>
            <Route path='/settings/profile' component={Profile}/>
            <Route render={() => <h2>Page not found!</h2>} />
          </Switch>
        </div>
        <Footer/>
      </div>
  );
}

function Routes(props){
  return (
    <BrowserRouter>
      <Route path="/" component={Wrapper} />
    </BrowserRouter>
  )
}


export default Routes;

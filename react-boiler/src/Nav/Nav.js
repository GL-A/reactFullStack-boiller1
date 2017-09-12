import React from 'react';
// import NavDropDown from './NavDropdown';
import BottomNav from './BottomNav';
import {connect} from 'react-redux';
import './Nav.css';
import { Row, Col } from 'antd';
import { getUser } from './../ducks/user/userActions';
class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearch: false,
      user: false,
      showDropdown: false,
      searchTerm: 'Art'
     }
    this.searchIconClick = this.searchIconClick.bind(this)
  }
  searchIconClick(){
    this.setState(pState => ({showSearch: !pState.showSearch}))
  }
  componentDidMount(){
    this.props.getUser();
  }
  render() {
    return(
      <div className="Nav-container" >
        <Row >
          <Col sm={0} className="nav-topbar center" >
            <img style={{height: '20px', width: '150px'}} src={require('./../assets/images/kickstarter-logo.png')} alt="kickstarter-logo"/>
          </Col>
          <BottomNav
            user={this.props.userObj.user}
            showSearch={this.state.showSearch}
            searchIconClick={this.searchIconClick}
            history={this.props.history.push}
          />
        </Row>
      </div>
    );
  }
}
export default connect(state => ({
  userObj: state.user
}), { getUser })(Nav)

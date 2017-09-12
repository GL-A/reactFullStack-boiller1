import React from 'react';
import { Affix, Row, Col, Icon, Input } from 'antd';

export default function BottomNav(props){
  return (
    <Col className="nav-bottombar" >
      <Affix offsetTop={0}>
        <Row style={{width: '100%', borderBottom: 'solid 1px #DAD7D4'}}>
          <div style={{overflow: 'hidden', height: '60.5px'}}>
            <Col  className={!props.showSearch ? 'center bottom-nav-anime-divs' : 'center bottom-nav-anime-divs search'} >
              <div className="space-apart" style={{width: '90%',height: '60.5px'}}>
                <Input
                  className={!props.showSearch ? 'search-input' : 'search-input search'}
                  style={{width: '300px'}}
                  placeholder='Search'
                  prefix={<Icon type="search"/>}
                  onPressEnter={() => alert('enter')}
                  />
                  <Icon onClick={props.searchIconClick} type="close"/>
              </div>
            </Col>
            <Col className={!props.showSearch ? 'nav-bottom-divs bottom-nav-anime-divs' :  'nav-bottom-divs bottom-nav-anime-divs search'} >
              <div className="nav-bottom-items search-div">
                <div  className="bottom-nav-item-left center" >
                  <Icon type="compass"/>Explore
                </div>
                <div onClick={() => props.history('/learn')} className="bottom-nav-item-left center">
                  Start
                </div>
              </div>
              <div className="nav-bottom-logo search-div" >
                <img onClick={()=> props.history('/')} style={{height: '20px', width: '150px'}} src={require('./../assets/images/kickstarter-logo.png')} alt='kickstarter-logo'/>
              </div>
              <div className="nav-bottom-items right search-div">
                <div className="bottom-nav-item-right center">
                  <Icon onClick={props.searchIconClick} type="search" />
                </div>
                <div onClick={() => props.history('/login')} style={{display: !props.user ? 'flex' : 'none'}} className="bottom-nav-item-right center">Log in</div>
                <div onClick={() => props.history('/signup')} style={{display: !props.user ? 'flex' : 'none'}} className="bottom-nav-item-right center">Sign up</div>
                <div style={{display: !props.user ? 'none' : 'flex'}} className="bottom-nav-item-right center bottom-nav-item-logo">
                  <img style={{height: '35px', width: '35px', borderRadius: '50%'}} src={require('./../assets/images/missing_user_avatar.png')} alt="logged in circle"></img>
                </div>
              </div>
            </Col>
          </div>
        </Row>
      </Affix>
    </Col>
  )
}

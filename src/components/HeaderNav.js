import React, { Component } from 'react';
import '../navbar.css'
import LoginSignUp from '../containers/LoginSignUp.js'
import NavBar from './NavBar.js'


class HeaderNav extends Component {

  // {this.props.currentUser ? <button type='button' onClick={this.handleLogoutClick} name="logoutBtn"><h3>LOG OUT</h3></button> : null}
render () {
  return(

    <div className="App">
      <div className="App-header">
        <h1><img src="http://www.pngmart.com/files/7/Ladder-PNG-Photos.png" className="App-logo" alt="spinning ladder logo" />  <i>Language Ladder</i><img src="http://www.pngmart.com/files/7/Ladder-PNG-Photos.png" className="App-logo" alt="spinning ladder logo" /></h1>
        <p><i>Climbing Over Language Barriers Since 2019</i></p>
      </div>
      <NavBar currentUser={this.props.currentUser}  onLogout={this.props.onLogout}/>
    </div>
    )
  }
}
export default HeaderNav;

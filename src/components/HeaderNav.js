import React, { Component } from 'react';
import '../navbar.css'
// import LoginSignUp from '../containers/LoginSignUp.js'
import NavBar from './NavBar.js'
import { BrowserRouter as Route, withRouter } from 'react-router-dom'


class HeaderNav extends Component {
  // <p><i>Language Barrier? Get over it!</i></p>

  // {this.props.currentUser ? <button type='button' onClick={this.handleLogoutClick} name="logoutBtn"><h3>LOG OUT</h3></button> : null}
render () {
  return(

    <div className="App">
      <div className="App-header">
        <h1><img src="http://www.pngmart.com/files/7/Ladder-PNG-Photos.png" className="App-logo" alt="spinning ladder logo" />  <i>Language Ladder</i><img src="http://www.pngmart.com/files/7/Ladder-PNG-Photos.png" className="App-logo" alt="spinning ladder logo" /></h1>
        <p><i>Climbing Over Language Barriers Since 2019</i></p>
      </div>

      <Route>
        <NavBar currentUser={this.props.currentUser}  onLogout={this.props.onLogout} showForms={this.props.showForms} sendHome={this.props.sendHome}  showEdit={this.props.showEdit}/>
      </Route>

    </div>
    )
  }
}
export default withRouter(HeaderNav);

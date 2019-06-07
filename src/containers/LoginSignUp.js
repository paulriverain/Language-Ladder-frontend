import React, { Component } from 'react';

import Login from '../components/Login.js'
import CreateUser from '../components/CreateUser.js'

class LoginSignUp extends Component {
render () {

  return(
    <div className="App">

      <Login handleLogin={this.props.handleLogin} onLogin={this.props.onLogin}/>
      <CreateUser/>

    </div>
    )
  }
}
export default LoginSignUp;

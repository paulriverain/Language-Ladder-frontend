import React, { Component } from 'react';

import Login from '../components/Login.js'
import CreateUser from '../components/CreateUser.js'

class LoginSignUp extends Component {
render () {

  return(
    <div className="App">

      <Login onLogin={this.props.onLogin}/>
      <CreateUser onCreateUser={this.props.onCreateUser}  handleLogin={this.props.handleLogin}/>

    </div>
    )
  }
}
export default LoginSignUp;

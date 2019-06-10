import React, { Component, Fragment } from 'react';
import '../navbar.css'
import LoginSignUp from '../containers/LoginSignUp.js'



class NavBar extends Component {



invokesLogout=(e) => {
  e.preventDefault()
  console.log('Hit here logout' );
  this.props.onLogout()

}


showsLoginForm=() => {
console.log('Hit here login' );
  // this.props.handleLogout()
  // this.props.history.push("/login")
}



render () {

  return(

    <div className='topnav'>

        {!this.props.currentUser ?
        <Fragment>
          <div>
            <a>Home</a>
          </div>

          <div class="topnav-centered">
            <a onClick={this.showsLoginForm}><h3>Login</h3></a>
          </div>
        </Fragment>
          :

      <Fragment>
        <div>
        <a href="">Home</a>
        </div>
        <div class="topnav-centered">
        <a class="active">Hello {this.props.currentUser.username}</a>
        </div>
        <div class="topnav-right">
          <a >Edit</a>
          <button type='button' onClick={this.invokesLogout} name="logoutBtn"><h3>LOG OUT</h3></button>
        </div>
      </Fragment>
      }



 </div>










    )
  }
}
export default NavBar;

import React, { Component, Fragment } from 'react';
import '../navbar.css'
// import LoginSignUp from '../containers/LoginSignUp.js'
import { withRouter } from 'react-router-dom'



class NavBar extends Component {



invokesLogout=() => {
  //changes state of currentUser through callback to MainContainer
  // e.preventDefault()
  this.props.onLogout()
}


showsLoginForm=() => {
  //changes route to login page through callback on MainContainer
  this.props.showForms()
}

toMainPage = () => {
  this.props.sendHome()
}

toEdit = () => {
  this.props.showEdit()
}


// //change between hello in diff Languages
// carousel= ()=> {
//   let words = ['1', '2', '3']
//   words.map(function(word){
//     console.log(word);
//     return <h2>{word}</h2>
//   })
// }
//
// handlesHello = () => {
//   // setInterval(this.carousel, 2000); // Change image every 2 seconds
// }


render () {

  return(

    <div className='topnav'>

        {!this.props.currentUser ?
        <Fragment>
          <div>
            <a  onClick={this.toMainPage}>Home</a>
          </div>

          <div className="topnav-centered">
            <a onClick={this.showsLoginForm}><h3>Login</h3></a>
          </div>


        </Fragment>

          :

      <Fragment>
        <div>
        <a  onClick={this.toMainPage}><h3>Home</h3></a>
        </div>
        <div className="topnav-centered">
        <a className="active" > <h3>Hello {this.props.currentUser.username}</h3></a>
        </div>

        <div className="topnav-right">
          <a onClick={this.toEdit}><h3>Profile</h3></a>

          <a type='button' onClick={this.invokesLogout} name="logoutBtn"><h3>Log Out</h3></a>
        </div>
      </Fragment>
      }

 </div>

    )
  }
}
export default NavBar;

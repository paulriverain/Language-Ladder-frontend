import React, { Component, Fragment } from 'react';
import HeaderNav from '../components/HeaderNav.js'
import TranslateContainer from './TranslateContainer.js'
import LoginSignUp from './LoginSignUp.js'
import PhrasesContainer from './PhrasesContainer.js'

class MainContainer extends Component {
  state= {
    phrases: [],
    currentUser: null
  }


  handleLogin = (loginInfo) =>{
    console.log("LOGIN INFO IS", loginInfo)
    // debugger
      localStorage.setItem("token", loginInfo.token)
      this.setState({currentUser: loginInfo})
      // this.props.history.push("/")
    }
  handleLogoutClick = ()=>{
    localStorage.removeItem("token")
    this.setState({currentUser: null})
    // this.props.history.push("/")
  }




  componentDidMount(){
    const token = localStorage.getItem('token')
    if(token) {
    //Fetches for the token
      fetch('http://localhost:3000/api/v1/current_user', {
        headers: {
          Authenticate: token
        }
      })
      .then(resp => resp.json())
      .then(user => {
        if (!user.error) {
          this.setState({currentUser: user})
          this.showsPhrases()
        }
      })
    }
  }

  showsPhrases = () => {
    //Fetches for all the phrases
    fetch('http://localhost:3000/api/v1/phrases')
    .then(res=> res.json())
    .then(phrases => this.setState({phrases: phrases}))
  }

// handlesCreateUser = () => {
//   fetch('http://localhost:3000/api/v1/user',{
//     method: "POST",
//     headers:{
//       "Content-Type": "application/json",
//       Accept: "application/json"
//     },
//     body: JSON.stringify(this.state)
//   })
//   .then(console.log)
// }


handlesCreateUser = (loginInfo) =>{
  console.log('hit the main for create');
  this.handleLogin(loginInfo)

}


  render () {
    return(
      <Fragment>

        <HeaderNav currentUser={this.state.currentUser} onLogout={this.handleLogoutClick}/>
        <div >
          {!this.state.currentUser ? <LoginSignUp onCreateUser={this.handlesCreateUser} onLogin={this.handleLogin}  /> : <h1>hello {this.state.currentUser.username}</h1>}
          {this.state.currentUser ? <button type='button' onClick={this.handleLogoutClick} name="logoutBtn"><h3>LOG OUT</h3></button> : null}
        </div>

        <div className="AppBody">
          <TranslateContainer/>
          { this.state.currentUser ?  <PhrasesContainer/>  :  null  }
        </div>

      </Fragment>
    )
  }

}






export default MainContainer;

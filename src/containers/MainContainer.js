import React, { Component, Fragment } from 'react';
import HeaderNav from '../components/HeaderNav.js'
import TranslateContainer from './TranslateContainer.js'
import LoginSignUp from './LoginSignUp.js'
import PhrasesContainer from './PhrasesContainer.js'
import { Route, withRouter } from 'react-router-dom';



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
      this.props.history.push("/")
    }
  handleLogoutClick = ()=>{
    localStorage.removeItem("token")
    this.setState({currentUser: null})
    this.props.history.push("/")
  }

bringsLogin = () =>{
  console.log('Hit mains bringsLogin func -----------');
  this.props.history.push("/login")
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

// {this.state.currentUser ? <button type='button' onClick={this.handleLogoutClick} name="logoutBtn"><h3>LOG OUT</h3></button> : null}


// router will hold LoginSignUp and show when click login button on nav

  render () {
    return(

  <Fragment>

        <HeaderNav currentUser={this.state.currentUser} onLogout={this.handleLogoutClick} showForms={this.bringsLogin} />


    <Route exact path="/" render={ () => {
        return (
          <Fragment>
            <div className="AppBody">
              <TranslateContainer/>
              { this.state.currentUser ?  <PhrasesContainer/>  :  null  }
            </div>
          </Fragment>
        )
      }}/>


    <Route exact path="/login" render={ () => {
        return  <LoginSignUp onCreateUser={this.handlesCreateUser} onLogin={this.handleLogin} />
    }}/>

  </Fragment>

    );
  }
}





export default withRouter(MainContainer);

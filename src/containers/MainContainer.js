import React, { Component, Fragment } from 'react';
import HeaderNav from '../components/HeaderNav.js'
import TranslateContainer from './TranslateContainer.js'
import LoginSignUp from './LoginSignUp.js'
import PhrasesContainer from './PhrasesContainer.js'
import { Route, withRouter } from 'react-router-dom';



class MainContainer extends Component {
//Handles state --------------------
//----------------------------------
  state= {
    phrases: [],
    currentUser: null,
    // userPhrases: []
  }

// Fetches for usertoken and calls phrases for that user if user !null
  componentDidMount(){
    const token = localStorage.getItem('token')
    fetch('http://localhost:3000/api/v1/phrases')
    .then(res=> res.json())
    .then(phrases => {
      this.setState({phrases: phrases}, () => console.log(this.state.phrases))
    })
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
          // debugger
          this.setState({currentUser: user})
          // this.setState({userPhrases: user.phrases})

        }
      })
    }
  }


//Callback functions----------------
//----------------------------------
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
    // this.setState({phrases: []})
    // this.setState({userPhrases: []})
    this.props.history.push("/")
  }

  bringsLogin = () =>{
    console.log('Hit mains bringsLogin func -----------');
    this.props.history.push("/login")
  }

  handlesHomeButtom = () => {
    console.log('sends home using nav');
    this.props.history.push("/")
  }

  handlesCreateUser = (loginInfo) =>{
    console.log('hit the main for create');
    this.handleLogin(loginInfo)
  }




  // showsPhrases = () => {
  //   //Fetches for all the phrases
  //   fetch('http://localhost:3000/api/v1/phrases')
  //   .then(res=> res.json())
  //   .then(phrases => {
  //     this.setState({phrases: phrases}, () => console.log(this.state.phrases))
  //   })
  // }







//renders page----------------------
//----------------------------------
  render () {
    const userPhrases = this.state.currentUser ? this.state.phrases.filter(phrase =>{return (phrase.user_id === this.state.currentUser.id)}) : null

    // console.log(this.state.phrases);
    // console.log('Phrases====', this.state.phrases);
    return(

  <Fragment>
        <HeaderNav currentUser={this.state.currentUser} onLogout={this.handleLogoutClick} showForms={this.bringsLogin} sendHome={this.handlesHomeButtom}/>

    <Route exact path="/" render={ () => {
        return (
          <Fragment>
            <div className="AppBody">
              <TranslateContainer/>
              { this.state.currentUser ?  <PhrasesContainer phrases={userPhrases} currentUser={this.state.currentUser}/>  :  null  }
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

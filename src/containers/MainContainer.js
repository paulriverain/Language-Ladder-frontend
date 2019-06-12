import React, { Component, Fragment } from 'react';
import HeaderNav from '../components/HeaderNav.js'
import TranslateContainer from './TranslateContainer.js'
import LoginSignUp from './LoginSignUp.js'
import PhrasesContainer from './PhrasesContainer.js'
import { Route, withRouter } from 'react-router-dom';
// import OrgMessage from '../components/messageBoxes/OrgMessage.js'
// import TransMessage from '../components/messageBoxes/TransMessage.js'
import SelectLang from '../components/messageBoxes/SelectLang.js'


class MainContainer extends Component {
//----------------------------------
//Handles state --------------------
  state= {
    languages: [],
    phrases: [],
    currentUser: null,
    currentLang: "",
    orMess: "",
    trMess: ""
  }

// Fetches for usertoken and calls phrases for that user if user !null
  componentDidMount(){
    const token = localStorage.getItem('token')

    fetch('http://localhost:3000/api/v1/languages')
    .then(res => res.json())
    .then(languages => this.setState({languages: languages}))

    fetch('http://localhost:3000/api/v1/phrases')
    .then(res=> res.json())
    .then(phrases => {
      this.setState({phrases: phrases})
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
          this.setState({currentUser: user})
        }
      })
    }
  }


//Callback functions----------------
//----------------------------------
  handleLogin = (loginInfo) =>{
    // console.log("LOGIN INFO IS", loginInfo)
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
    // console.log('Hit mains bringsLogin func -----------');
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



//---------------------------------------------
//for translate -------------------------------
  handleLang = (e) => {
    console.log(e.target.value);
    this.setState({currentLang: e.target.value})
  }

  handleOrgMess = (e) =>{
    console.log(e.target.value);
    this.setState({orMess: e.target.value})
  }


  handleTranMess = () =>{
    // console.log('Translator was hit');
    // console.log(this.state);

    fetch('http://localhost:3000/api/v1/phrases/translate',{
      method: "POST",
      headers:{
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(this.state)
    })
    .then(resp => resp.json())
    .then(translated => this.setState({trMess: translated.message.text}, () => console.log(translated)))
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    // console.log('submit button hit');
    this.handleTranMess()
  }








  //---------------------------------------------
  //for saving Phrases-------------------------------

  handleCreatePhrase = () =>{
    console.log('Hits the save phrase in main', this.state.currentLang);
// console.log('Hits the save phrase in main 2', thisCode)

let thisCode = this.state.currentLang ? this.state.languages.filter( language => {return (language.lang_code === this.state.currentLang)}): null

    console.log(thisCode[0].id);
    console.log(this.state.currentUser.id);

    // if(thisCode.includes(this.state.currentLang)){
      fetch('http://localhost:3000/api/v1/phrases', {
        method: "POST",
        headers:{
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          user_id: this.state.currentUser.id,
          language_id: thisCode[0].id,
          user_message: this.state.orMess,
          new_message: this.state.trMess
        })
      })
      .then(resp => resp.json())
      .then(newphrase => {
          this.setState({phrases: [...this.state.phrases, newphrase]}, () => console.log(this.state.phrases))
      })
  }




//renders page----------------------
//----------------------------------
  render () {
    const userPhrases = this.state.currentUser ? this.state.phrases.filter(phrase =>{return (phrase.user_id === this.state.currentUser.id)}) : null



    console.log(this.state);
    // console.log('Phrases====', userPhrases);
    return(

  <Fragment>
        <HeaderNav currentUser={this.state.currentUser} onLogout={this.handleLogoutClick} showForms={this.bringsLogin} sendHome={this.handlesHomeButtom}/>

    <Route exact path="/" render={ () => {
        return (
          <Fragment>
            <div className="AppBody">


              <TranslateContainer
                currentState={this.state}
                onType={this.handleOrgMess}
                selectLang={this.handleLang}
                afterSub={this.state.trMess}
                forSubmit={this.handleSubmit}
                makesPhrase= {this.handleCreatePhrase}
              />


              { this.state.currentUser ?  <PhrasesContainer phrases={userPhrases} currentUser={this.state.currentUser}/>  :  null  }
            </div>
          </Fragment>
        )
      }}/>

    <Route exact path="/login" render={ () => {
        return  <LoginSignUp onCreateUser={this.handlesCreateUser} onLogin={this.handleLogin}/>
    }}/>
  </Fragment>
    );
  }
}





export default withRouter(MainContainer);

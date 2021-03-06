import React, { Component, Fragment } from 'react';
import HeaderNav from '../components/HeaderNav.js'
import TranslateContainer from './TranslateContainer.js'
import LoginSignUp from './LoginSignUp.js'
import PhrasesContainer from './PhrasesContainer.js'
import EditUser from '../components/EditUser.js'
import TestMode from '../components/TestMode.js'
import 'semantic-ui/dist/semantic.min.css';
import { Route, withRouter, Switch } from 'react-router-dom';


// import OrgMessage from '../components/messageBoxes/OrgMessage.js'
// import TransMessage from '../components/messageBoxes/TransMessage.js'


class MainContainer extends Component {
//---------------------------------------------------------------------
//Handles state -------------------------------------------------------
  state= {
    languages: [],
    phrases: [],
    currentUser: null,
    currentLang: "",
    orMess: "",
    trMess: "",
    filterLang: "All Languages...",
    testModeClick: false

  }

//------------------------------------------------------------------------
// Fetches for usertoken and calls phrases for that user if user !null----
  componentDidMount(){
    const token = localStorage.getItem('token')
  //Fetches for languages
    fetch('http://localhost:3000/api/v1/languages')
    .then(res => res.json())
    .then(languages => this.setState({languages: languages}))
  //Fetches for phrases
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


//------------------------------------------------------------------------
// Login, create,  logout Callback functions------------------------------

  handleLogin = (loginInfo) =>{
    localStorage.setItem("token", loginInfo.token)
    this.setState({currentUser: loginInfo})
    this.setState({trMess: ""})
    this.props.history.push("/")
  }

  handleLogoutClick = ()=>{
    localStorage.removeItem("token")
    this.setState({currentUser: null})
    this.setState({trMess: ""})
    this.props.history.push("/")
  }

  bringsLogin = () =>{
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


//---------------------------------------------------------------------------
//for Edit ------------------------------------------------------------------

handlesEdit = () => {
  // console.log('hit the main for Edit');
  this.props.history.push("/edit")
}

updateCurretUser = (updatedUser) =>{
  // console.log('hit the main for changing user state   ',   updatedUser);
  console.log(this.state.currentUser);
  alert(updatedUser.message)
  this.setState({currentUser: {...this.state.currentUser, username: updatedUser.user.username}})
}


//----------------------------------------------------------------------------
//for translate --------------------------------------------------------------

  handleLang = (e) => {
    console.log(e.target.value);
    this.setState({currentLang: e.target.value})
    this.setState({trMess: ""})
  }

  handleOrgMess = (e) =>{
    console.log(e.target.value);
    this.setState({orMess: e.target.value})
    this.setState({trMess: ""})
  }


  handleSubmit = (e) =>{
      e.preventDefault()

    if (this.state.orMess === ""){
      alert("Invalid input")
    } else if(this.state.currentLang === "Languages..."){
        alert("Invalid input")
    }else if(this.state.currentLang === ""){
        alert("Invalid input")
    } else{
      console.log("passes what state here?:", this.state);
      fetch('http://localhost:3000/api/v1/phrases/translate',{
        method: "POST",
        headers:{
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          orMess: this.state.orMess,
          currentLang: this.state.currentLang
        })
      })
      .then(resp => resp.json())
      .then(translated => this.setState({trMess: translated.message.text}, () => console.log(translated)))

    }
  }





  //-------------------------------------------------------------------------
  //for saving Phrases-------------------------------------------------------

  handleCreatePhrase = () =>{
  // console.log('Hits the save phrase in main', this.state.currentLang);
  let thisCode = this.state.currentLang ? this.state.languages.filter( language => {return (language.lang_code === this.state.currentLang)}): null
  console.log(this.state.trMess);
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
      console.log(newphrase);
        this.setState({phrases: [newphrase, ...this.state.phrases]}, () => console.log(this.state.phrases))
        alert("Translation Successfully Saved!")
    })
  }

//----------------------------------------------------------------------------
//for Deleting Phrases--------------------------------------------------------

  handleDelete =(thisPhrase) =>{
    console.log('Hit Delete handler on main:  ', thisPhrase);
    console.log(thisPhrase.id);
    // let removedPhrase = thisPhrase
    this.setState({phrases: this.state.phrases.filter((phrase) => phrase !== thisPhrase)})
    fetch(`http://localhost:3000/api/v1/phrases/${thisPhrase.id}`, {
      method: "DELETE"
    })
    .then(resp=>resp.json())
    .then(response => alert(response.message))
  }

//----------------------------------------------------------------------------
//for Filtering Phrases-------------------------------------------------------


handlesFilterLanguage = (e) => {
  // console.log(e.target.value);
  // console.log('Hit main filter land handler', console.log(e.target.value));
  this.setState({filterLang: e.target.value})

}

//----------------------------------------------------------------------------
//for Test Mode Phrases-------------------------------------------------------

handleTest = () => {
    this.props.history.push("/test")

}

//-----------------------------------------------------------------
//renders page-----------------------------------------------------
//-----------------------------------------------------------------

  render () {


    const userPhrases = this.state.currentUser ? this.state.phrases.filter(phrase =>{return (phrase.user_id === this.state.currentUser.id)}) : null
console.log(this.state.currentUser);

    return(

  <Fragment>

    <HeaderNav
      currentUser={this.state.currentUser}
      onLogout={this.handleLogoutClick}
      showForms={this.bringsLogin}
      sendHome={this.handlesHomeButtom}
      showEdit={this.handlesEdit}
    />

  <div className="Appa">
    <Switch>
    <Route exact path="/edit" render={ () => {
      return <EditUser currentUser={this.state.currentUser} updateUser={this.updateCurretUser} onLogout={this.handleLogoutClick}/>
    }}/>

    <Route exact path="/login" render={ () => {
      return  <LoginSignUp onCreateUser={this.handlesCreateUser} onLogin={this.handleLogin}/>
    }}/>




  { this.state.currentUser ? <Route path="/test" render={ () => {
      return (
        <Fragment>
          <div className="AppBody"><br /><br />

          <TranslateContainer
            currentState={this.state}
            onType={this.handleOrgMess}
            selectLang={this.handleLang}
            afterSub={this.state.trMess}
            forSubmit={this.handleSubmit}
            makesPhrase= {this.handleCreatePhrase}
          /> <br /><br />

            <TestMode
            phrases={userPhrases.filter(userPhrase => this.state.filterLang === userPhrase.language.lang_code || this.state.filterLang === "All Languages...")}
              currentUser={this.state.currentUser}
              selectLang={this.handlesFilterLanguage}
              allLang={this.state.languages}
              onDelete={this.handleDelete}
              handleTest={this.handlesHomeButtom}
              filterLang = {this.state.filterLang}
            />

          </div>
        </Fragment>
      )
    }}/>: null}





    <Route path="/" render={ () => {
      return (
        <Fragment>
          <div className="AppBody"><br /><br />

          <TranslateContainer
            currentState={this.state}
            onType={this.handleOrgMess}
            selectLang={this.handleLang}
            afterSub={this.state.trMess}
            forSubmit={this.handleSubmit}
            makesPhrase= {this.handleCreatePhrase}
          /><br /><br />

            { this.state.currentUser ?
              <PhrasesContainer
                phrases={userPhrases.filter(userPhrase => this.state.filterLang === userPhrase.language.lang_code || this.state.filterLang === "All Languages...")}
                currentUser={this.state.currentUser}
                selectLang={this.handlesFilterLanguage}
                allLang={this.state.languages}
                onDelete={this.handleDelete}
                testModeClick = {this.state.testModeClick}
                handleTest={this.handleTest}
                filterLang = {this.state.filterLang}
              />
              :  null  }

          </div>
        </Fragment>
      )
    }}/>

</Switch>
</div>
  </Fragment>

    );

  }
}





export default withRouter(MainContainer);

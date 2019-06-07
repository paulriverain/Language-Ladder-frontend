import React, { Component, Fragment } from 'react';
import HeaderNav from '../components/HeaderNav.js'
import TranslateContainer from './TranslateContainer.js'
import LoginSignUp from './LoginSignUp.js'


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
    //Fetches for all the reviews
      // fetch('http://localhost:3000/api/v1/reviews')
      // .then(res=> res.json())
      // .then(reviews => this.setState({reviews: reviews}))
    //Fetches for the token
    const token = localStorage.getItem('token')
    if(token) {
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

  render () {

    return(
      <Fragment>

        <HeaderNav />
        {!this.state.currentUser ? <LoginSignUp handleLogin={this.handleLogin} onLogin={this.handleLogin}/> : <h1>hello</h1>}
        {this.state.currentUser ?
                  <button type='button' onClick={this.handleLogoutClick} name="logoutBtn"><h3>LOG OUT</h3></button>
                  : null
                }
        <div className="AppBody">

          <TranslateContainer/>

        </div>
      </Fragment>
    )
  }

}
export default MainContainer;

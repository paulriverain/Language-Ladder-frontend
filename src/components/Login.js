import React, { Component, Fragment } from 'react';
// import { withRouter } from 'react-router-dom'

class UserLogin extends Component {

  state = {
    username: "",
    password: ""
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }


  handlesLoginFetch= (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/api/v1/auth',{
      method: 'POST',
      headers:{
        "Content-Type": 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then(resp => resp.json())
    .then(loginInfo => {
      if (loginInfo.error) {
        alert(loginInfo.error)
      }
      else {
        this.props.onLogin(loginInfo)
        alert("You have successfully logged in!")
      }
    })
    .then(this.setState({
      username: "",
      last_name: "",
      password: ""
    }))
    console.log(this.props);
    // this.props.history.push("/") ----route handled in MainContainer
  }

// console.log(this.state)
  render(){
    console.log("PROPS THAT WE ARE INTERESTED IN", this.props)
    return (
      <Fragment>
      <div className="loginHolder">
        <form onSubmit={this.handlesLoginFetch}>
          First Name: <input type="text" placeholder="Username" name="username" value={this.state.username} onChange={this.handleChange}/><br />
          Password: <input type="password"  placeholder="password" name="password" value={this.state.password} onChange={this.handleChange}/><br />
          <input type="submit" value="Submit"/>
        </form>
      </div>

      </Fragment>
    );
  }
}
export default UserLogin;
// export default withRouter(UserLogin);

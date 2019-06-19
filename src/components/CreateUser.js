import React, { Component } from 'react';


class CreateUser extends Component {

  state = {
    username: "",
    password: "",
    bio: "",
    error: ""
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  createNewUser = (e) => {
    e.preventDefault()
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
    .then(resp => resp.json())
    .then(signUp => {
      if (signUp.error) {
        alert("Username or Password already exists or is invalid.")
      }
      else {
        this.props.onCreateUser(signUp)
        alert("Your new account has been created!")
      }
    })
    .then(this.setState({
      username: "",
      bio: "",
      password: ""
    }))
  }

  // Create Bio:<input type="text"  placeholder="new boo" name="bio" value={this.state.bio} onChange={this.handleChange}/><br />
  render(){
    return (
      <div className="loginHolder">
        <br /><br />
        <h2>Create Account</h2>
        <form className="ui form" onSubmit={this.createNewUser}>
          Create Username:<input type="text"  placeholder="New Username" name="username" value={this.state.username} onChange={this.handleChange}/><br />
          Create Password: <input type="password"  placeholder="new password" name="password" value={this.state.password} onChange={this.handleChange}/><br /> <br />
          <input type="submit" value="Submit"/>
        </form>
        <br /><br />
      </div>
    );
  }
}
export default CreateUser;

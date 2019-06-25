import React, { Component } from 'react';

class EditUser extends Component {
   state = {
     editUser: false,
     newUsername: '',
     newPassword: ''
   }


  handleNameChange = (e) =>{
    e.persist();
    this.setState({newUsername: e.target.value})
  }

  handlePWChange = (e) =>{
    e.persist();
    this.setState({newPassword: e.target.value})
  }


  editSubmit = (e) => {
    e.preventDefault()
    if(this.state.newUsername === "" && this.state.newUsername === ""){
        alert("New Username or Password can't be blank.")
    } else {
      console.log("in the update fetch");

      fetch(`http://localhost:3000/api/v1/users/${this.props.currentUser.id}`,{
        method: 'PATCH',
        headers:{
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          username: this.state.newUsername,
          password: this.state.newPassword
        })
      })
      .then(resp => resp.json())
      .then(updatedUser =>
        this.props.updateUser(updatedUser),
      )
    }
  }

  showEditForm = () =>{
    this.setState({editUser: !this.state.editUser})
    this.setState({newUsername: this.props.currentUser.username})
  }



  handlesDeleteUser = () => {
    console.log(this.props.currentUser.id);
    fetch(`http://localhost:3000/api/v1/users/${this.props.currentUser.id}`, {
      method: "DELETE"
    })
    .then(resp=>resp.json())
    .then(response =>
      alert(response.message)
    )
    this.props.onLogout()
  }




render () {
  return(
    <div className="App">
    <br />      <br />      <br />
      { !this.state.editUser ? <button className="ui primary button" onClick={this.showEditForm}><h1>Edit Profile</h1></button> : null }

      { this.state.editUser ?<div className="loginHolder">
        <form className="ui form" onSubmit={this.editSubmit}>
          Edit Username:<input type="text" lable="Edit Username" defaultValue={this.props.currentUser.username} name="username"  onChange={this.handleNameChange}/><br />

          Edit Password: <input type="password"  placeholder="new password" name="password"  onChange={this.handlePWChange}/><br /><br />
          <input type="submit" value="Submit"/>
        </form>
        </div>

      : null }
      <br /><br />
      <p><button className="ui button" onClick={this.handlesDeleteUser}>Delete Profile</button></p>

    </div>
    )
}
}

export default EditUser;

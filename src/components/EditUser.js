import React, { Component } from 'react';

class EditUser extends Component {
   state = {
     editUser: false,

     newUsername: '',
     newPassword: ''


   }


  handleNameChange = (e) =>{
    e.persist();
    console.log('hit change');
    this.setState({newUsername: e.target.value})
  }

  handlePWChange = (e) =>{
    e.persist();
    console.log('hit change');
    this.setState({newPassword: e.target.value})
  }


  editSubmit = (e) => {
    e.preventDefault()

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

  showEditForm = () =>{
    this.setState({editUser: !this.state.editUser})
  }


  render () {
    return(
      <div className="App">
        <h1>HI</h1>

        { !this.state.editUser ? <button onClick={this.showEditForm}>get users</button> : null }

        { this.state.editUser ?
          <form onSubmit={this.editSubmit}>
            Edit Username:<input type="text"  placeholder={this.props.currentUser.username} name="username"  onChange={this.handleNameChange}/><br />

            Edit Password: <input type="password"  placeholder="new password" name="password"  onChange={this.handlePWChange}/><br />
            <input type="submit" value="Submit"/>
          </form>
        : null }

      </div>
      )
  }
}

export default EditUser;

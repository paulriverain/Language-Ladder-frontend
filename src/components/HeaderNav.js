import React, { Component } from 'react';
import '../navbar.css'
import NavBar from './NavBar.js'
import { withRouter } from 'react-router-dom'


class HeaderNav extends Component {
state = {
  ladderSpin: true
}

handlesSpin = () =>{
  this.setState({ladderSpin: !this.state.ladderSpin})
}

render () {
  // <div className="appLogoHeader">
  // <img src="http://www.pngmart.com/files/7/Ladder-PNG-Photos.png" alt="ladder logo" />
  // </div>
  return(

    <div className="App">
      <div className="App-header">
        <div className="w3-container w3-center w3-animate-opacity">
       <br />


        {this.state.ladderSpin ?
          <div>
            <h1><img src="http://www.pngmart.com/files/7/Ladder-PNG-Photos.png" className="App-logo" alt="spinning ladder logo" /><b><i> Language Ladder </i></b></h1>
          </div>
          :
          <div>
            <br /><br /><br /><br /><br />
            <h1><b><i>Language Ladder</i></b></h1>
          </div>
        }

        <p><i>Climbing Over Language Barriers Since 2019</i></p><br />
      </div>


        <NavBar currentUser={this.props.currentUser}  onLogout={this.props.onLogout} showForms={this.props.showForms} sendHome={this.props.sendHome}  showEdit={this.props.showEdit}/>

      </div>
        <div className="ladderSpin">
          <button className="ladderSpin" onClick={this.handlesSpin}>{this.state.ladderSpin ?  <p>Ladder off</p> : <p>Ladder on</p>}</button>
        </div>
    </div>
    )
  }
}
export default withRouter(HeaderNav);

import React, { Component } from 'react';

import OrgMessage from '../components/messageBoxes/OrgMessage.js'
import TransMessage from '../components/messageBoxes/TransMessage.js'
import SelectLang from '../components/messageBoxes/SelectLang.js'



class TranslateContainer extends Component {
  state = {
    currentLang: "",
    orMess: "",
    trMess: ""
  }


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
    console.log(this.state);

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

  // console.log('currentTrans state is set to:  ', this.state.trMess);
  render () {
    return(
      <div className='TranslateContainer'>
        <h1>Translate Here</h1>

        <form onSubmit={this.handleSubmit}>
          <h3><i>Translate Text:</i></h3>
          <div className="TranslateBox">
            <tr>
              <td><OrgMessage onType={this.handleOrgMess}/></td>
              <td><SelectLang selectLang={this.handleLang}/></td>
              <td><TransMessage afterSub={this.state.trMess}/></td>
            </tr>
          </div>
        <input type="submit" value="Translate"/>
        </form>

      </div>
    )
  }

}
export default TranslateContainer;

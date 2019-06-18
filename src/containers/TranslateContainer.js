import React, { Component } from 'react';

import OrgMessage from '../components/messageBoxes/OrgMessage.js'
import TransMessage from '../components/messageBoxes/TransMessage.js'
import SelectLang from '../components/messageBoxes/SelectLang.js'



class TranslateContainer extends Component {
  // state = {
  //   currentLang: "",
  //   orMess: "",
  //   trMess: ""
  // }
  //
  //
  // handleLang = (e) => {
  //   console.log(e.target.value);
  //   this.setState({currentLang: e.target.value})
  // }
  //
  // handleOrgMess = (e) =>{
  //   console.log(e.target.value);
  //
  //   this.setState({orMess: e.target.value})
  // }
  //
  //
  // handleTranMess = () =>{
  //   // console.log('Translator was hit');
  //   console.log(this.state);
  //
  //   fetch('http://localhost:3000/api/v1/phrases/translate',{
  //     method: "POST",
  //     headers:{
  //       "Content-Type": "application/json",
  //       Accept: "application/json"
  //     },
  //     body: JSON.stringify(this.state)
  //   })
  //   .then(resp => resp.json())
  //   .then(translated => this.setState({trMess: translated.message.text}, () => console.log(translated)))
  //
  // }
  //
  // handleSubmit = (e) =>{
  //   e.preventDefault()
  //   // console.log('submit button hit');
  //   this.handleTranMess()
  // }

  render () {
    console.log(this.props);
    return(
      <div className='TranslateContainer'>
        <h1>Translate Here</h1>

        <form onSubmit={this.props.forSubmit}>
          <h3><i>Translate Text:</i></h3>
          <div className="TranslateBox">

              <OrgMessage onType={this.props.onType}/>
              <SelectLang selectLang={this.props.selectLang} currentState={this.props.currentState}/>
              <TransMessage afterSub={this.props.afterSub}/>

          </div>
        <input type="submit" value="Translate"/>
        </form>
        {this.props.currentState.currentUser === null
          ?
            null
          :
          <div>
            
            {this.props.afterSub === "" || this.props.onType === "" || this.props.selectLang === "" ? null : <button onClick={this.props.makesPhrase}>Save Phrases</button>}
          </div>
        }

      </div>
    )
  }

}
export default TranslateContainer;

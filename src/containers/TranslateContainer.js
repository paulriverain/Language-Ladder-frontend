import React, { Component } from 'react';

import OrgMessage from '../components/messageBoxes/OrgMessage.js'
import TransMessage from '../components/messageBoxes/TransMessage.js'
import SelectLang from '../components/messageBoxes/SelectLang.js'



class TranslateContainer extends Component {


  render () {
    console.log(this.props);
    return(
      <div className='TranslateContainer'>
      <br />
        <h1>Translate Here</h1>

        <form onSubmit={this.props.forSubmit}>
          <h5><i>Select Language:</i></h5>
          <div className="TranslateBox">
          <SelectLang selectLang={this.props.selectLang} currentState={this.props.currentState}/>
          <div className="item">

              <OrgMessage onType={this.props.onType}/>
              ::
              <TransMessage afterSub={this.props.afterSub}/>

          </div>
          </div>
        <input className="ui primary button" type="submit" value="Translate"/>
        </form>
        {this.props.currentState.currentUser === null
          ?
            null
          :
          <div>
              <br />
            {this.props.afterSub === "" || this.props.onType === "" || this.props.selectLang === "" ? null : <button className="ui button" onClick={this.props.makesPhrase}>Save Phrases</button>}
          </div>
        }

      </div>
    )
  }

}
export default TranslateContainer;

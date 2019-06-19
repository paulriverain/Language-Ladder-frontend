import React, { Component } from 'react';

import OrgMessage from '../components/messageBoxes/OrgMessage.js'
import TransMessage from '../components/messageBoxes/TransMessage.js'
import SelectLang from '../components/messageBoxes/SelectLang.js'



class TranslateContainer extends Component {


  render () {
    console.log(this.props);
    return(
      <div className='TranslateContainer'>
        <h1>Translate Here</h1>

        <form onSubmit={this.props.forSubmit}>
          <h3><i>Translate Text:</i></h3>
          <div className="TranslateBox">
          <div className="item">

              <OrgMessage onType={this.props.onType}/>
              <SelectLang selectLang={this.props.selectLang} currentState={this.props.currentState}/>
              <TransMessage afterSub={this.props.afterSub}/>

          </div>
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

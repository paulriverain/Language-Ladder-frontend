import React, { Component } from 'react';

import OrgMessage from '../components/messageBoxes/OrgMessage.js'
import TransMessage from '../components/messageBoxes/TransMessage.js'
import SelectLang from '../components/messageBoxes/SelectLang.js'

class TranslateContainer extends Component {
  render () {
    // const transareaHolder = <TransMessage/>
    // const orgareaHolder = <OrgMessage/>
    return(
      <div className='TranslateContainer'>
        <h1>Translate Here</h1>

        <form >
          <h3><i>Translate Text:</i></h3>
          <div className="TranslateBox">
            <tr>
              <td><OrgMessage/></td>
              <td><SelectLang/></td>
              <td><TransMessage/></td>
            </tr>
          </div>
        <input type="submit" value="Translate"/>
        </form>

      </div>
    )
  }

}
export default TranslateContainer;

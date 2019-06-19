import React, { Component, Fragment } from 'react';


class TransMessage extends Component {
render () {

  return(
    <div className="textAreaBoxes">
      <h5>Translate Message</h5>
      <textarea maxLength="12" row="10" cols="15" value={this.props.afterSub}></textarea>
    </div>
    )
  }
}
export default TransMessage;

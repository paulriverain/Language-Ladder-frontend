import React, { Component, Fragment } from 'react';


class TransMessage extends Component {
render () {

  return(
    <div>
      <h4>Translated Message</h4>
      <h5><textarea maxLength="12" cols="20" value={this.props.afterSub}></textarea></h5>
    </div>
    )
  }
}
export default TransMessage;

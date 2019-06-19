import React, { Component, Fragment } from 'react';


class OrgMessage extends Component {
render () {

  return(
    <div className="textAreaBoxes">
      <h5>Original Message</h5>
  <textarea maxLength="10" row="10" cols="15" onChange={this.props.onType}></textarea>
    </div>
    )
  }
}
export default OrgMessage;

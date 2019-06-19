import React, { Component, Fragment } from 'react';


class OrgMessage extends Component {
render () {

  return(
    <div>
      <h4>Original Message</h4>
      <h5><textarea maxLength="10" row="10" cols="20" onChange={this.props.onType}></textarea></h5>
    </div>
    )
  }
}
export default OrgMessage;

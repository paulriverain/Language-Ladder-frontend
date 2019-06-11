import React, { Component, Fragment } from 'react';


class OrgMessage extends Component {
render () {

  return(
    <Fragment>
      <h4>Original Message</h4>
      <textarea maxLength="10" onChange={this.props.onType}></textarea>
    </Fragment>
    )
  }
}
export default OrgMessage;

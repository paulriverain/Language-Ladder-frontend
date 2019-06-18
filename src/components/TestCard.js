import React, { Component, Fragment } from 'react';
import TestForm1 from './TestForm1.js'
import TestForm2 from './TestForm2.js'

class TestCard extends Component {


render () {

  console.log(this.props);
  const formInputOrg = <TestForm1 info={this.props.phrase}/>
  const formInputLang = <TestForm2 info={this.props.phrase}/>
  return(
  <Fragment>

    <div className="item">
      <div className="OrgColumn">
        <h4>Original Language</h4>
        {this.props.hiddenBtn ? this.props.phrase.user_message : formInputOrg }

      </div>

      <div className="LangColumn">
        <h4>{this.props.phrase.language.lang_name}</h4>
        {!this.props.hiddenBtn ? this.props.phrase.new_message : formInputLang }
      </div>
    </div>
    <h1>- - - - - - - - - - - - - - - - - - -</h1>
    </Fragment>
    )
  }
}
export default TestCard;

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
        <div className="phraseCard">

          <div className="item">

            <div className="OrgColumn">
            <br />
              <h3>Original Text</h3>
              <h4>{this.props.hiddenBtn ? this.props.phrase.user_message : formInputOrg }</h4>
            </div>

            <div className="LangColumn">
            <br />
              <h3>{this.props.phrase.language.lang_name}</h3>
              <h4>{!this.props.hiddenBtn ? this.props.phrase.new_message : formInputLang }</h4><br />
            </div>
          </div>
          <br />
        </div>
      </Fragment>
    )
  }
}
export default TestCard;

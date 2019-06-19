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
              <h4>Original text</h4>
              <p>{this.props.hiddenBtn ? this.props.phrase.user_message : formInputOrg }</p>
            </div>

            <div className="LangColumn">
            <br />
              <h4>{this.props.phrase.language.lang_name}</h4>
              <p>{!this.props.hiddenBtn ? this.props.phrase.new_message : formInputLang }</p><br />
            </div>
          </div>
          <br />
        </div>
      </Fragment>
    )
  }
}
export default TestCard;

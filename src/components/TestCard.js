import React, { Component, Fragment } from 'react';
import TestForm1 from './TestForm1.js'
import TestForm2 from './TestForm2.js'

class TestCard extends Component {


render () {

  console.log(this.props);
  const formInput1 = <TestForm1 info={this.props.phrase}/>
  const formInput2 = <TestForm2 info={this.props.phrase}/>
  return(
  <Fragment>

    <div className="item">
      <div className="OrgColumn">
        <h4>Original Language</h4>
        <p>{this.props.hiddenBtn ?

          this.props.phrase.user_message : formInput1
        }</p>

      </div>

      <div className="LangColumn">
        <h4>In {this.props.phrase.language.lang_name}</h4>

        <p>{!this.props.hiddenBtn ?

          this.props.phrase.new_message : formInput2
        }</p>
      </div>
    </div>
    <h1>- - - - - - - - - - - - - - - - - - -</h1>
    </Fragment>
    )
  }
}
export default TestCard;

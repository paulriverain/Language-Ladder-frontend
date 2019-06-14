import React, { Component } from 'react';
import FlipCard from 'react-flipcard-2';

class TestFlip extends Component {

invokesDelete = () =>{
// console.log(this.props.phrase);
  const thisPhrase = this.props.phrase
  this.props.onDelete(thisPhrase)
}



render () {
  console.log(this.props.phrase.language.lang_name);
  return(

<div className="phraseCard">
  <div className='deletePhrase'>
    <button onClick={this.invokesDelete}>X</button>
  </div>
  <div className="flipcardholder">
    <FlipCard>
      <div className="messageFlip">
        <h3>Language: <i>{this.props.phrase.language.lang_name}</i></h3>
        <p> {this.props.phrase.new_message}</p>
      </div>

      <div className="messageFlip">

          <h4>Original message</h4>
          <p>{this.props.phrase.user_message}</p>
      </div>
    </FlipCard>
  </div>
</div>



    )
  }
}
export default TestFlip;

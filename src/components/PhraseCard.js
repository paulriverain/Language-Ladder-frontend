import React, { Component } from 'react';

class PhraseCard extends Component {


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
      <div>
        <h3>Translate to: <i>{this.props.phrase.language.lang_name}</i></h3>
        <p><b>Original Message:</b> <u> {this.props.phrase.user_message} </u></p>
      </div>
      <div>
        <p><b>Translated Message:</b> <u> {this.props.phrase.new_message} </u></p>
      </div>


    </div>
    )
  }
}
export default PhraseCard;

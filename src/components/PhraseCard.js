import React, { Component } from 'react';

class PhraseCard extends Component {


  invokesDelete = () =>{
// console.log(this.props.phrase);
    const thisPhrase = this.props.phrase
    this.props.onDelete(thisPhrase)
  }




render () {
  return(
    <div className="phraseCard">
      <div className='deletePhrase'>
        <button onClick={this.invokesDelete}>X</button>
      </div>
      <h2></h2>
        <div>
          <h3>Translate to: <i>{this.props.phrase.language.lang_name}</i></h3>
          <h4><b>Original Message:</b> <u> {this.props.phrase.user_message} </u></h4>
        </div>
        <div>
          <h4><b>Translated Message:</b> <u> {this.props.phrase.new_message} </u></h4>
        </div><br />


    </div>
    )
  }
}
export default PhraseCard;

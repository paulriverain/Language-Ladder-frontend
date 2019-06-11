import React, { Component } from 'react';


class PhraseCard extends Component {
render () {
console.log(this.props.phrase.user_message);
  return(
      <div className="phraseCard">
        <h3><img src="http://www.pngmart.com/files/7/Ladder-PNG-Photos.png" className="App-logo" alt="spinning ladder logo" /><p><i>Language Barrier? Get over it!</i></p></h3>
        <h4>Original message</h4>
        <p>{this.props.phrase.user_message}</p>
        <h4>Translated message</h4>
        <p>{this.props.phrase.new_message}</p>
        <p>{this.props.phrase.language_id}</p>
      </div>
    )
  }
}
export default PhraseCard;

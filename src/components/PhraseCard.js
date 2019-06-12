import React, { Component } from 'react';


class PhraseCard extends Component {
render () {
  console.log(this.props.phrase.language.lang_name);
  return(
      <div className="phraseCard">

        <h3>Language: <i>{this.props.phrase.language.lang_name}</i></h3>
        <h4>Original message</h4>
        <p>{this.props.phrase.user_message}</p>
        <h4>Translated message</h4>
        <p>{this.props.phrase.new_message}</p>

      </div>
    )
  }
}
export default PhraseCard;

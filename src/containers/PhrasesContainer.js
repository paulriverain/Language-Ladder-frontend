import React, { Component } from 'react';
import PhraseCard from '../components/PhraseCard.js'

class PhrasesContainer extends Component {



render () {
  console.log(this.props.phrases);
  const onePhrase = this.props.phrases.map(phrase => {
    return <PhraseCard phrase={phrase} key={phrase.id}/>
   })
  return(
    <div className="App">
      <div className='PhraseContainer'>

      <h2><i><u>Saved Phrases</u></i></h2>
        {onePhrase}
      </div>
    </div>
    )
  }
}
export default PhrasesContainer;

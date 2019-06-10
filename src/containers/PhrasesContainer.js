import React, { Component } from 'react';
import PhraseCard from '../components/PhraseCard.js'

class PhrasesContainer extends Component {
render () {

  return(
    <div className="App">
      <div className='PhraseContainer'>
      
      <h2><i><u>Saved Phrases</u></i></h2>
        <PhraseCard/>
      </div>
    </div>
    )
  }
}
export default PhrasesContainer;

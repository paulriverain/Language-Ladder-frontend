import React, { Component } from 'react';
import PhraseCard from '../components/PhraseCard.js'
import TestFlip from '../components/TestFlip.js'
import SelectFilter from '../components/SelectFilter.js'


class PhrasesContainer extends Component {
state = {
  flashCardClick: false
}

handleLearn = () =>{
  this.setState({flashCardClick: !this.state.flashCardClick})
}


render () {


  const onePhrase = this.props.phrases.map(phrase => {
    return <PhraseCard phrase={phrase} key={phrase.id} onDelete={this.props.onDelete}/>
  })

  const learnPhraseFlash = this.props.phrases.map(phrase => {
     return <TestFlip phrase={phrase} key={phrase.id} onDelete={this.props.onDelete}/>
  })

  //sets up filter function
  const chooseFilter = <SelectFilter languages={this.props.allLang} selectLang={this.props.selectLang}/>

  return(
    <div className="App">
      <div className='PhraseContainer'>

      <h2><i><u>Saved Phrases</u></i></h2>

      {onePhrase.length === 0 ?

        <p>----  No Saved Phrases  ----</p>

        :

        <div>
        <p><button onClick={this.handleLearn}>Flashcard Mode{this.state.flashCardClick ? <p>On</p> : <p>Off</p>}</button>
        {chooseFilter}
        </p>

        {this.state.flashCardClick ? learnPhraseFlash : onePhrase}
        </div>

      }

      </div>
    </div>
    )
  }
}
export default PhrasesContainer;

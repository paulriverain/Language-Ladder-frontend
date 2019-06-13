import React, { Component } from 'react';
import PhraseCard from '../components/PhraseCard.js'
import TestFlip from '../components/TestFlip.js'


class PhrasesContainer extends Component {
state = {
  learnClick: false
}

handleLearn = () =>{
  this.setState({learnClick: !this.state.learnClick})
}





render () {
  console.log(this.state.learnClick);
  const onePhrase = this.props.phrases.map(phrase => {
    return <PhraseCard phrase={phrase} key={phrase.id} onDelete={this.props.onDelete}/>
   })

   const learnPhrase = this.props.phrases.map(phrase => {
     return <TestFlip phrase={phrase} key={phrase.id} onDelete={this.props.onDelete}/>
    })

  return(
    <div className="App">
      <div className='PhraseContainer'>

      <h2><i><u>Saved Phrases</u></i></h2>
      <p><button onClick={this.handleLearn}>Test Mode{this.state.learnClick ? <p>On</p> : <p>Off</p>}</button></p>

        {this.state.learnClick ? learnPhrase : onePhrase}

      </div>
    </div>
    )
  }
}
export default PhrasesContainer;

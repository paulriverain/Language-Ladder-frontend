import React, { Component, Fragment } from 'react';
import PhraseCard from '../components/PhraseCard.js'
import TestFlip from '../components/TestFlip.js'
import SelectFilter from '../components/SelectFilter.js'
// import TestMode from '../components/TestMode.js'
import { Route, withRouter } from 'react-router-dom'

class PhrasesContainer extends Component {
state = {
  flashCardClick: false
}


handleLearn = () =>{
  this.setState({flashCardClick: !this.state.flashCardClick})
}


handleTest = () => {
    this.props.handleTest()
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
      <Fragment>

      <h2><i><u>Saved Phrases</u></i></h2>

      <button onClick={this.handleTest}>Test Mode</button>
      <br /> <br />
      {chooseFilter}
      <br />
       <Fragment>
        {onePhrase.length === 0 ? <p>----  No Saved Phrases  ----</p> :
          <div>
            <p><button onClick={this.handleLearn}>Flashcard Mode{this.state.flashCardClick ? <p>On</p> : <p>Off</p>}</button></p>
            {this.state.flashCardClick ? learnPhraseFlash : onePhrase}
          </div>
        }
        </Fragment>


        </Fragment>
      </div>
    </div>
    )
  }
}
export default withRouter(PhrasesContainer);

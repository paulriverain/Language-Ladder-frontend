import React, { Component, Fragment } from 'react';
import PhraseCard from '../components/PhraseCard.js'
import TestFlip from '../components/TestFlip.js'
import SelectFilter from '../components/SelectFilter.js'
// import TestMode from '../components/TestMode.js'
import { withRouter } from 'react-router-dom'

class PhrasesContainer extends Component {
state = {
  flashCardClick: false,
  loadedCards: 10
}


handleLearn = () =>{
  this.setState({flashCardClick: !this.state.flashCardClick})
}


handleTest = () => {
    this.props.handleTest()
}


handlesBackLoad = () =>{
  console.log('load the previous 10');
  this.setState({loadedCards: (this.state.loadedCards -10)})
}
handlesNextLoad = () =>{
  console.log('load the following 10');
  this.setState({loadedCards: (this.state.loadedCards +10)})
}


render () {

  const onePhrase = this.props.phrases.map(phrase => {
    return <PhraseCard phrase={phrase} key={phrase.id} onDelete={this.props.onDelete}/>
  })

  const learnPhraseFlash = this.props.phrases.map(phrase => {
     return <TestFlip phrase={phrase} key={phrase.id} onDelete={this.props.onDelete}/>
  })



  //sets up filter function
  const chooseFilter = <SelectFilter languages={this.props.allLang} selectLang={this.props.selectLang} filterLang={this.props.filterLang}/>

  return(
    <div className="App">
      <div className='PhraseContainer'>
        <Fragment>
          <h2><i><u>Saved Phrases</u></i></h2>
          <div className="item">
            <button onClick={this.handleTest}>Test Mode</button>
            <br /> <br />
            {chooseFilter}

            {onePhrase.length > 0 ?

              <button onClick={this.handleLearn}>Flashcard Mode{this.state.flashCardClick ? <p>On</p> : <p>Off</p>}</button>

            : null }

          </div>
          <br />

          <Fragment>
            {onePhrase.length === 0 ? <p>----  No Saved Phrases  ----</p> :
              <Fragment>
                {this.state.flashCardClick ? learnPhraseFlash : onePhrase}

                <Fragment>
                  <button onClick={this.handlesBackLoad}> back </button><button onClick={this.handlesNextLoad}> next </button>
                </Fragment>

              </Fragment>

            }
          </Fragment>
        </Fragment>
      </div>
    </div>
    )
  }
}
export default withRouter(PhrasesContainer);

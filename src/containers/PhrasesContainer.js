import React, { Component, Fragment } from 'react';
import PhraseCard from '../components/PhraseCard.js'
import TestFlip from '../components/TestFlip.js'
import SelectFilter from '../components/SelectFilter.js'
import { withRouter } from 'react-router-dom'

class PhrasesContainer extends Component {
state = {
  flashCardClick: false,
  startCards: 0,
  loadedCards: 5
}


handleLearn = () =>{
  this.setState({flashCardClick: !this.state.flashCardClick})
}


handleTest = () => {
    this.props.handleTest()
}


handlesBackLoad = () =>{
  console.log('load the previous 5');
    if (this.state.startCards > 0) {
      this.setState( prevState =>{
        return {startCards: this.state.startCards -=5, loadedCards: this.state.loadedCards -=5}
      })
    }
}


handlesNextLoad = () =>{
  console.log('load the following 5');
  if (this.state.loadedCards < this.props.phrases.length + 5) {
    this.setState(prevState =>{
      return {startCards: this.state.startCards +=5, loadedCards: this.state.loadedCards +=5}

    })
  }
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


  const numShownCards = onePhrase.slice(this.state.loadedCards-5, this.state.loadedCards).length

  console.log("onePhrase array? ", onePhrase.slice(this.state.loadedCards-5, this.state.loadedCards));


  return(
    <div className="App">
      <div className="w3-container w3-center w3-animate-opacity">
        <div className='PhraseContainer'>
          <Fragment>
            <br />
            <h2><i><u>Saved Phrases</u></i></h2>

            <div>{chooseFilter}<br />  </div>

            <div className="item">
              {onePhrase.length > 0 ?<button className="ui button" onClick={this.handleTest}>Test Mode</button>  : null }
              <br /> <br />

              {onePhrase.length > 0 ?

                <button className="ui button" onClick={this.handleLearn}>Flashcard Mode{this.state.flashCardClick ? <p>On</p> : <p>Off</p>}</button>

              : null }

            </div>
            <br />

            <Fragment>
              {onePhrase.length === 0 ? <div><h4>----  No Saved Phrases  ----</h4> <br /></div>:
                <Fragment>
                  {this.state.flashCardClick ? learnPhraseFlash : onePhrase.slice(this.state.loadedCards-5, this.state.loadedCards)}

                  <Fragment>

                  <br />
                     <p>  {this.state.startCards > 0 ?  <button onClick={this.handlesBackLoad}> back page </button> :null }


                      {numShownCards < 5 ? null :<button onClick={this.handlesNextLoad}> next page </button>} </p>
                    <div className="totalCardCount">
                    [{onePhrase.length}] Saved Phrases

                    </div>
                    <br />
                  </Fragment>

                </Fragment>

              }
            </Fragment>
          </Fragment>
        </div>
      </div>
    </div>
    )
  }
}
export default withRouter(PhrasesContainer);

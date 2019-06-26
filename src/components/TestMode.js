import React, { Component } from 'react';
import PhraseCard from './PhraseCard.js'
import SelectFilter from './SelectFilter.js'
import TestCard from './TestCard.js'


class TestMode extends Component {
state = {
  hidden: true
}

handleTest = () => {
    this.props.handleTest()
}

handleSwitch = ()=>{
  this.setState({hidden: !this.state.hidden})
}



render () {
  console.log(this.props);
// .filter(userPhrase => this.state.filterLang === userPhrase.language.lang_code || this.state.filterLang === "All Languages...")

  const chooseFilter = <SelectFilter languages={this.props.allLang} selectLang={this.props.selectLang} filterLang={this.props.filterLang}/>

  const testCard = this.props.phrases.map(phrase => {
    return <TestCard phrase={phrase} key={phrase.id} onDelete={this.props.onDelete} hiddenBtn={this.state.hidden}/>
  })

  return(
    <div className="App">
      <div className='PhraseContainer'>
        <div><br />
          <h2><i><u>Language Barrier?</u></i></h2>
          <h3><i><u>Let us help you get you over it!</u></i></h3><br />
          {chooseFilter}
          <br />
          <div className= "item">
            <button className="ui button" onClick={this.handleTest}>Exit Test Mode</button>
            <br />    <br />

            <button className="ui button" onClick={this.handleSwitch}>{this.state.hidden ?  <p>Hide Left</p> : <p>Hide Right</p>}</button>
          </div> <br />
          <div className="Columns">
            {testCard}
          </div><br />
        </div>
      </div>
    </div>

    )
  }
}
export default TestMode;

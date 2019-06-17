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

  const chooseFilter = <SelectFilter languages={this.props.allLang} selectLang={this.props.selectLang}/>

  const testCard = this.props.phrases.map(phrase => {
    return <TestCard phrase={phrase} key={phrase.id} onDelete={this.props.onDelete} hiddenBtn={this.state.hidden}/>
  })

  return(
    <div className="App">
      <div className='PhraseContainer'>

        <div>
          <h3><i><u>Language Barrier? Let us help you get you over it!</u></i></h3>
          <button onClick={this.handleTest}>Exit Test Mode</button>
          <br />    <br />
          {chooseFilter}
          <br />

          <button onClick={this.handleSwitch}>{this.state.hidden ? <p>Hide Right</p> : <p>Hide Left</p>}</button>
          <div className="Columns">
            {testCard}
          </div>
      </div>
    </div>
  </div>

    )
  }
}
export default TestMode;

import React, { Component } from 'react';


class SelectLang extends Component {
  state = {
    languages: []
  }


  componentDidMount(){
    fetch('http://localhost:3000/api/v1/languages')
    .then(res => res.json())
    .then(languages => this.setState({languages: languages}))
  }

  render () {
    // use an on change to toggle between language codes..
    return(
      <div className="dropdown">
        <select onChange={this.props.selectLang}>
          <option value="">Languages...</option>
          {this.state.languages.map( language => {
            return <option key={language.id} value={language.lang_code}>{language.lang_name}</option>
          })}
        </select>
      </div>
    )
  }
}
export default SelectLang;

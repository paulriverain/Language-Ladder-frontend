import React, { Component } from 'react';



class SelectFilter extends Component {

  render () {
    // use an on change to toggle between language codes..
    const selectedLangFilter = this.props.languages.map( language => {
      return (<option key={language.id} value={language.lang_code}>{language.lang_name}</option>)
    })

    return(
      <div className="dropdown">
        <select onChange={this.props.selectLang}>
          <option>All Languages...</option>
          {selectedLangFilter}
        </select>
      </div>
    )
  }
}
export default SelectFilter;

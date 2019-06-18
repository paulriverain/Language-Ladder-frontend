import React, { Component } from 'react';



class SelectFilter extends Component {

  render () {

    // use an on change to toggle between language codes..
    console.log(this.props.filterLang);

    const selectedLangFilter = this.props.languages.map( language => {

      return (<option key={language.id} value={language.lang_code} selected={this.props.filterLang === language.lang_code ? true : false}>{language.lang_name}</option>)
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

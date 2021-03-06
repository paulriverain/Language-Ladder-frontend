import React, { Component } from 'react';



class SelectLang extends Component {

  render () {
    console.log(this.props.currentState);
    // use an on change to toggle between language codes..
    const selectedLang = this.props.currentState.languages.map( language => {
      return (<option key={language.id} value={language.lang_code}>{language.lang_name}</option>)
    })

    return(
      <div className="dropdown">

        <select className="ui fluid search dropdown" onChange={this.props.selectLang}>
          <option defaultValue="">Languages...</option>
          {selectedLang}
        </select>  <br />  <br />
      </div>
    )
  }
}
export default SelectLang;

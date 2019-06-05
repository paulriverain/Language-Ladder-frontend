import React, { Component, Fragment } from 'react';
import HeaderNav from '../components/HeaderNav.js'
import TranslateContainer from './TranslateContainer.js'

class MainContainer extends Component {
  state= {
    phrases: [],

  }




  render () {

    return(
      <Fragment>

        <HeaderNav />

        <div className="AppBody">
          <TranslateContainer/>

        </div>
      </Fragment>
    )
  }

}
export default MainContainer;

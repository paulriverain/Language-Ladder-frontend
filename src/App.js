import React from 'react';
import './App.css';
import './ladderFall.css';

import MainContainer from './containers/MainContainer'
import { BrowserRouter as Router, withRouter } from 'react-router-dom'


function App() {
  return (
      <Router>
        <MainContainer/>
      </Router>
  );
}

export default withRouter(App);

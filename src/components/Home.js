import React, { Component } from 'react';

class Home extends Component {

  render () {
    return(
      <Fragment>
        <div className="AppBody">

          <TranslateContainer
            currentState={this.state}
            onType={this.handleOrgMess}
            selectLang={this.handleLang}
            afterSub={this.state.trMess}
            forSubmit={this.handleSubmit}
            makesPhrase= {this.handleCreatePhrase}
          />
            <Switch>

              <Route '/' render={()=> {
                <PhrasesContainer
                phrases={userPhrases.filter(userPhrase => this.state.filterLang === userPhrase.language.lang_code || this.state.filterLang === "All Languages...")}
                currentUser={this.state.currentUser}
                selectLang={this.handlesFilterLanguage}
                allLang={this.state.languages}
                onDelete={this.handleDelete}
                testModeClick = {this.state.testModeClick}
                handleTest={this.handleTest}
                />
              }}

              // <Route '/test' comoponent ={TestMode} />

              <Route exact path="/test" render={ () => {
                return
                <TestMode
                  phrases={userPhrases.filter(userPhrase => this.state.filterLang === userPhrase.language.lang_code || this.state.filterLang === "All Languages...")}
                  currentUser={this.state.currentUser}
                  selectLang={this.handlesFilterLanguage}
                  allLang={this.state.languages}
                  onDelete={this.handleDelete}
                />

              }}/>

            </Switch>
        </div>
      </Fragment>
    )
  }
}
export default Home;
route = '/' signup/login/landing page

route ='/translation' component=Home

route ='/test' component=Test

class Test extends Component {

  render () {
    return(
      <Fragment>
        <div className="AppBody">

          <TranslateContainer
            currentState={this.state}
            onType={this.handleOrgMess}
            selectLang={this.handleLang}
            afterSub={this.state.trMess}
            forSubmit={this.handleSubmit}
            makesPhrase= {this.handleCreatePhrase}
          />
            <TestMode />
        </div>
      </Fragment>
    )
  }
}
export default Test;

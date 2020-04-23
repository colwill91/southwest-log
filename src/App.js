import React, { Component } from 'react';
import Main from './Main/Main'
import Sub from './Main/Sub'

import {
  Switch,
  Route,
  HashRouter
} from "react-router-dom";

class App extends Component {

  render() {
    return (
      <HashRouter basename="/">
      <div className="App">
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/product/:id" render={(props) => <Sub {...props} /> } />
        </Switch>
      </div>
      </HashRouter>
    );
  }
}

export default App;

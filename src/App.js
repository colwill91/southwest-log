import React, { Component } from 'react';
import Main from './Main/Main'
import Sub from './Main/Sub'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends Component {

  render() {
    return (
      <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/product/:id" render={(props) => <Sub {...props} /> } />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;

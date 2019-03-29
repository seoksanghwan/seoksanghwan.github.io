import React, { Component } from 'react';
import { Navigation } from '../Navigation/Navigation';
import { Main } from '../Main/Main';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <>
        <Navigation />
          <Switch>
            <Route exact to="/" render={props => {
              return <Main {...props} />
            }} />
          </Switch>
      </>
    );
  }
}

export default App;

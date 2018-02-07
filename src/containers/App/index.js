import React, { PureComponent } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Home, GameView } from '../';
// import { NavDrawer } from '../../components/';
class App extends PureComponent {

  render() {
    return (
      <Router>
        <main style={{ height: '80vh' }}>
          <Route exact path="/" component={Home} />
          <Route path="/game" component={GameView} />
        </main>
      </Router>
    );
  }
}

export default App;
import React, { PureComponent } from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { Home, GameView } from '../';

class App extends PureComponent {

  render() {
    return (
      <Router>
        <section>
          <nav>
            <div><Link to="/" >Home</Link></div>
            <div><Link to="/game" >Game</Link></div>
          </nav>
          <main>
            <Route exact path="/" component={Home} />
            <Route path="/game" component={GameView} />
          </main>
        </section>
      </Router>
    );
  }
}

export default App;
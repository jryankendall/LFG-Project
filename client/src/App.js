import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';

import Nav from './components/Nav';
import Home from './pages/Home';
import Test from './pages/Test';
import ForumIndex from './pages/ForumIndex';
import Forum from './pages/Forum';

class App extends Component {
  render() {
    const App = () => (
      <div className="container">
        <Nav />
        <div className="row">
          <div className="col s12">
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/forum' component={ForumIndex} />
              <Route exact path={`/forum/:id`} component={Forum} />
              <Route path="/pages/pub/home" component={Home}/>
              <Route path='/test' component={Test}/>
            </Switch>
          </div>
        </div>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;

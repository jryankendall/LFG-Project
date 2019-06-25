import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';

import Nav from './components/Nav';
import Home from './pages/Home';
import Test from './pages/Test';

class App extends Component {
  render() {
    const App = () => (
      <div className="container">
        <Nav />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path="/pages/pub/home" component={Home}/>
          <Route path='/test' component={Test}/>
        </Switch>
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

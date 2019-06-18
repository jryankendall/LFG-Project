import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import Nav from './components/Nav';
import Home from './pages/Home';
import Test from './pages/Test';

function App() {
  return (
    <div className="App">
      <Router>
      <Nav />
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/test" component={Test} />
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;

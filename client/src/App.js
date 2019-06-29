import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';

import Nav from './components/Nav';
import Home from './pages/Home';
import ForumIndex from './pages/ForumIndex';
import Forum from './pages/Forum';
import Thread from './pages/Thread';
import NewThread from './pages/NewThread';
import Sitepath from './components/Sitepath';
import NotFound from './pages/NotFound';
import Parties from './pages/Parties';

class App extends Component {
  render() {
    const App = () => (
      <div className="container light-blue lighten-5 main-app-body">
        <Nav />
        <br></br>
        <div className="row">
          <Sitepath />
        </div>
        <div className="row">
          <div className="col s12">
            <Switch>
              <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home}/>
              <Route exact path={`${process.env.PUBLIC_URL}/forum`} component={ForumIndex} />
              <Route exact path={`${process.env.PUBLIC_URL}/forum/:id`} component={Forum}/>
              <Route exact path={`${process.env.PUBLIC_URL}/forum/:id/thread/:threadid`} component={Thread} />
              <Route exact path={`/${process.env.PUBLIC_URL}forum/:id/post`} component={NewThread} />
              <Route exact path={`${process.env.PUBLIC_URL}/parties`} component={Parties} />
              <Route path={`${process.env.PUBLIC_URL}/forum/:id/thread/`} component={NotFound} />
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

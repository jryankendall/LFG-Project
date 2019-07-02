import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from './components/Nav';
import Home from './pages/Home';
import ForumIndex from './pages/ForumIndex';
import Forum from './pages/Forum';
import Thread from './pages/Thread';
import NewThread from './pages/NewThread';
import Sitepath from './components/Sitepath';
import NotFound from './pages/NotFound';
import Parties from './pages/Parties';
import NewParty from './pages/NewParty';


require("dotenv").config();

function App() {
  return(
    <Router>
      <div className="container light-blue lighten-5 main-app-body">
        <Nav />
        <br></br>
        <div className="row">
          <Sitepath />
        </div>
        <div className="row">
          <div className="col s12">
            <Switch>
              <Route exact path={`/`} component={Home}/>
              <Route exact path={`/forum`} component={ForumIndex} />
              <Route exact path={`/forum/:id`} component={Forum}/>
              <Route exact path={`/forum/:id/thread/:threadid`} component={Thread} />
              <Route exact path={`/forum/:id/post`} component={NewThread} />
              <Route exact path={`/parties`} component={Parties} />
              <Route exact path={`/parties/new`} component={NewParty} />
              <Route path={`/forum/:id/thread/`} component={NotFound} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  )
}


export default App;

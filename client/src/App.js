import React from 'react';
import { Route } from "react-router-dom";

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
import FullParty from './pages/FullParty';


require("dotenv").config();
const baseUrl = process.env.PUBLIC_URL;

function App() {
  return(
    <>
      <Nav />
      <div className="container light-blue lighten-5 main-app-body">
        <br></br>
        <div className="row">
          <Sitepath />
        </div>
        <div className="row">
          <div className="col s12">
              <Route exact path={baseUrl + `/`} component={Home}/>
              <Route exact path={baseUrl + `/forum`} component={ForumIndex} />
              <Route exact path={baseUrl + `/forum/:id`} component={Forum}/>
              <Route exact path={baseUrl + `/forum/:id/thread/:threadid`} component={Thread} />
              <Route exact path={baseUrl + `/forum/:id/post`} component={NewThread} />
              <Route exact path={baseUrl + `/parties`} component={Parties} />
              <Route exact path={baseUrl + `/parties/new`} component={NewParty} />
              <Route exact path={baseUrl + `/forum/:id/thread/`} component={NotFound} />
              <Route exact path={baseUrl + `/parties/:id`} component={FullParty} />
          </div>
        </div>
      </div>
    </>
  )
}


export default App;

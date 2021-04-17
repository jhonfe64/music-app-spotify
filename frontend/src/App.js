import React from 'react';
import Header from './components/Header';
import WellcomeMessage from './components/WellcomeMessage';
import SongSearch from './components/SongSearch'
import SingleSong from './components/singleSong'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route path='/' exact>
          <WellcomeMessage />
        </Route>
        <Route path='/home' exact>
          <SongSearch />
        </Route>
        <Route path='/singleSong' exact>
          <SingleSong />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

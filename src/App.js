import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import ListPage from './ListPage';
import UpdatePage from './UpdatePage';
import AuthPage from './AuthPage';
import CreatePage from './CreatePage';




export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Sign In!</Link>
            </li>
            <li>
              <Link to="/create">Create new movie</Link>
            </li>
            <li>
              <Link to="/movies/1">Update a movie</Link>
            </li>
            <li>
              <Link to="/movies">List of movies</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <AuthPage />
          </Route>
          <Route exact path="/movies">
            <ListPage />
          </Route>
          <Route exact path="/create">
            <CreatePage />
          </Route>
          <Route exact path="/movies/:id">
            <UpdatePage />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserList from './components/UserList';
import UserAddNew from './components/UserAddNew';

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/">
          <div className="app-title">
            React Redux Exercise - Characters App
          </div>
          <div className="app-subtitle">
            Create and add new characters to the list or delete the ones you don't want.
          </div>
        </Link>
        <Switch>
          <Route exact path="/" component={UserList} />
          <Route exact path="/new" component={UserAddNew} />
        </Switch>

        <div className="footer">
          2020 - {' '}
          <a href="https://github.com/MargSousa/redux-characters-app" >
            Margarida Sousa - Github
          </a>
        </div>
      </div>
    </Router>
  );
}

export default App;

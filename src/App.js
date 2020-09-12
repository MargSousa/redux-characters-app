import React from 'react';
import UserList from './components/UserList';

function App() {
  return (
    <div className="App">

      <div className="app-title">
        Redux Workshop - User App
      </div>

      <UserList />
     
      <div className="footer">
        Wild Code School 2020 - Margarida Sousa
      </div>
    </div>
  );
}

export default App;

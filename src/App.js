import React from 'react';
import logo from './logo.svg';
import './App.css';
import DataList from './components/DataList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <header className="App-header">
    <DataList />
    </header>
    </div>
  );
}

export default App;

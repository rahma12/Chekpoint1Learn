import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu';
import Paragraphe from './Paragraphe'


const App = () => {
  return (
    <div className="App">
      <Menu />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
        <Paragraphe/>

      </div>
      <div>
       <Paragraphe/>

      </div>
      <div>
        <Paragraphe/>

      </div>

    </div>
  );
}

export default App;

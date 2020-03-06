import React from 'react';
import './App.css';
import Header from './Header';
import Band from './Band';
import data from './metal.json';

function App() {
  var bands = data.length;

  var unique_countries = 0;

  const cont = {};

  var countries = data.map(function (data) {
    if (data.origin in cont) {
        cont[data.origin] += 1;
    }

    else {
      cont[data.origin] = 1;
    }
  });

  console.log(cont)

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <p># of Bands: {bands}</p>
        <p>{cont.map}</p>
        <Band />
      </header>
    </div>
  );
}

export default App;

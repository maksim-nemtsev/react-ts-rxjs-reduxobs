import React from 'react';
import './App.css';
import { Search } from './components/Search';
import { Deck } from './components/Deck';

function App() {

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
      }}
    >
      <Search />
      <Deck/>
    </div>
  );
}

export default App;

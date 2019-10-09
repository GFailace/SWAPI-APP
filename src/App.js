import React from 'react';
import './App.css';

import Film1 from './components/Film1'
import Film2 from './components/Film2'
import Film3 from './components/Film3';
import Film4 from './components/Film4';
import Film5 from './components/Film5';
import Film6 from './components/Film6';
import Film7 from './components/Film7';
import Header from './layout/Header';

function App() {
  return (
    <div>
      <Header />
      <div className="home">
        <Film1 />
        <Film2 />
        <Film3 />
        <Film4 />
        <Film5 />
        <Film6 />
        <Film7 />
      </div>
    </div>
  );
}

export default App;

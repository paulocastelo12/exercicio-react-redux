import React from 'react'
import './App.css';


import Card from './components/Card'
import Intervalo from './components/Intervalo'
import Media from './components/Media'
import Sorteio from './components/Sorteio'
import Soma from './components/Soma';

function App() {

  return (
    <div className="App">
      <h1>Exercicio React-Redux (Simples)</h1>
      <div className="linha">
        <Intervalo >X</Intervalo>
      </div>
      <div className="linha">
        <Media ></Media>
        <Soma ></Soma>
        <Sorteio ></Sorteio>
      </div>
      
    </div>
  );
}

export default App;

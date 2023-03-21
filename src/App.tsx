import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Counter} from "./componets/Counter/Counter";
import {ValueCounter} from "./componets/ValueCounter/ValueCounter";

function App() {
  return (
    <>
      <div  className={'App'}>
          <Counter/>
      </div>
    </>
  );
}

export default App;

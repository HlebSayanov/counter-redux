import React from 'react';
import './App.css';
import {Counter} from "./componets/Counter/Counter";
import {ValueCounter} from "./componets/ValueCounter/ValueCounter";


function App() {
  return (
    <>
      <div  className={'App'}>
          <div className={'valueCounter'}>
              <ValueCounter />
          </div>
        <div>
            <Counter/>
        </div>


      </div>
    </>
  );
}

export default App;

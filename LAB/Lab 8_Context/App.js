import React from "react";
import { CounterProvider } from "./CounterContext";
import CounterDisplay from "./CounterDisplay";
import CounterControl from "./CounterControl";

const App = () => {
  return(
    <CounterProvider>
      <div>
        <h1>Context Counter</h1>
        <CounterDisplay/>
        <CounterControl/>
      </div>
    </CounterProvider>
  )
}

export default App;

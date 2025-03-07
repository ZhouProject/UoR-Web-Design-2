import './App.css';
import { useState } from 'react';

function Counter() {
  // Logic
  const [counter, setCounter] = useState(0);

  const clickHandler = (title) => {
    if (title == 'Increment'){
      setCounter(counter + 1);
    } else if (title == 'Decrement'){
      setCounter(counter - 1);
    } else {
      setCounter(counter + 5);
    }
  };




  // To HTML
  return (
    <div>
      <p>{counter}</p>
      <Button title='Increment' clickHandler={clickHandler} />
      <Button title='Decrement' clickHandler={clickHandler} />
      <Button title='Increment by 5' clickHandler={clickHandler} />
    </div>
  );
}

function Button({title, clickHandler}) {


  return (
    <div>  
      <button onClick = {() => clickHandler(title)}> {title} </button>
    </div>
  );
}




export default Counter;

# ReacJS

## [Installation](https://code.visualstudio.com/docs/nodejs/reactjs-tutorial)
- You'll need [Node.js](https://nodejs.org/) JavaScript runtime and [npm](https://www.npmjs.com/) (Node.js package manager) installed.
  - Tip: To test that you have Node.js and npm correctly installed on your machine, you can type ```node --version``` and ```npm --version``` in a terminal or command prompt.
- Create a new folder, then open it with Terminal
- Create React project (replace ```my-app``` with your project name)
  
  ```npx create-react-app my-app```

- Run our React application by navigating to the new folder and typing npm start to start the web server and open the application in a browser: (For Mac users, you might need to open it manually in VS Code)
  ```
  cd my-app
  npm start
  ```
- You should see the React logo and a link to "Learn React" on http://localhost:3000 in your browser. We'll leave the web server running while we look at the application with VS Code. (If your see ```Can't resolve 'web-vitals'```, try ```npm install web-vitals```

- To open your React application in VS Code, open another terminal or command prompt window, navigate to the my-app folder and type ```code .:```
  ```
  cd my-app
  code .
  ```

## JSX
- stands for JavaScript XML, allowing us to write HTML in React and place them in DOM without any ```createElement()``` and/or ```appendChild()``` methods.
  ```javascript
  const myElement = <h1>I Love JSX!</h1>;

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(myElement);
  ```
- With JSX you can write expressions inside curly braces ```{ }```.
  ```javascript
  const myElement = <h1>React is {5 + 5} times better with JSX</h1>;
  ```
- Use braces ```()``` for multiple line of code.
- The HTML code must be wrapped in ONE top level element.
  ```javascript
  const myElement = (
  <>
    <p>I am a paragraph.</p>
    <p>I am a paragraph too.</p>
  </>
  );
  ```
- Elements Must be Closed
  ```javascript
  const myElement = <input type="text" />;
  ```
- Use ```className``` for attribute class
  ```javascript
  const myElement = <h1 className="myclass">Hello World</h1>;
  ```

## React Components
- Components are like functions that return HTML elements.
- Component's name MUST start with an upper case letter.
  ```javascript
  function Car() {
    return <h2>I am a Car!</h2>;
  }

  function Garage() {
    return (
      <>
        <h1>Who lives in my Garage?</h1>
        <Car />
      </>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Garage />);
  ```
- We can export components and access them in other files.
- Export
  ```javascript
  function Car() {
    return <h2>Hi, I am a Car!</h2>;
  }

  export default Car;
  ```
- Import
  ```javascript
  import React from 'react';
  import ReactDOM from 'react-dom/client';
  import Car from './Car.js';

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Car />);
  ```

## [React Props (Properties)](https://www.w3schools.com/REACT/react_props.asp)
- Props are arguments passed into React components.
- Props are passed to components via HTML attributes.
  ```javascript
  const myElement = <Car brand="Ford" />;
  
  function Car(props) {
    return <h2>I am a { props.brand }!</h2>;
  }
  ```
- Props are also how you pass data from one component to another, as parameters.
  ```javascript
  function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
  }

  function Garage() {
    return (
      <>
        <h1>Who lives in my garage?</h1>
        <Car brand="Ford" />
      </>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Garage />);
  ```

## [React Events](https://www.w3schools.com/REACT/react_events.asp)
- Just like HTML DOM events, React can perform actions based on user events.
- React has the same events as HTML: click, change, mouseover etc.
- React events are written in camelCase syntax: ```onClick``` instead of ```onclick```.
- React event handlers are written inside curly braces: ```onClick={shoot}```  instead of ```onclick="shoot()"```.
- We'll be using [Arrow Function](https://www.w3schools.com/REACT/react_es6_arrow.asp) to define functions inside React Components
  ```javascript
  function Football() {
    const shoot = () => {
      alert("Great Shot!");
    }

    return (
      <button onClick={shoot}>Take the shot!</button>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Football />);
  ```

## [React Hooks](https://www.w3schools.com/react/react_usestate.asp)
- Hooks are utility functions that are part of React
- Hooks exposes APIs to local state, lifecycle events, reference to JSX elements etc
- Hooks follow a naming pattern. All hooks are prefixed with `use{hook_name}`. E.g. useState, useRef, useEffect etc
- At the top of your component, import the useState Hook.
  ```javascript
  import { useState } from "react";
  ```
- We initialize our state by calling useState in our function component.
- `useState` accepts an initial state and returns two values:
  - The current state.
  - A function that updates the state.
  ```javascript
  import { useState } from "react";
  import ReactDOM from "react-dom/client";

  function FavoriteColor() {
    const [color, setColor] = useState("red");

    return <h1>My favorite color is {color}!</h1>
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<FavoriteColor />);
  ```
- To update our state, we use our state updater function.
- We should never directly update state. Ex: ```color = "red"``` is not allowed.
  ```javascript
  import { useState } from "react";
  import ReactDOM from "react-dom/client";

  function FavoriteColor() {
    const [color, setColor] = useState("red");

    return (
      <>
        <h1>My favorite color is {color}!</h1>
        <button
          type="button"
          onClick={() => setColor("blue")}
        >Blue</button>
      </>
    )
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<FavoriteColor />);
  ```























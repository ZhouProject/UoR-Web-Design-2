# [Context](https://react.dev/reference/react/createContext)
- In React, we can pass data using `prop` but what if we need to work with highly nested component tree?
- We can use `React Context API` to pass data through the component tree without having to pass props down manually at every level.
  
### `createContext`
- Firstly, import the necessary library
- Then Call `createContext` outside of any components to create a context.
- Syntax: `const SomeContext = createContext(defaultValue)`
  ```javascript
  import { createContext, useState, useContext } from 'react';
  const ThemeContext = createContext('light');
  ```
- Typically, you will use SomeContext.Provider in components above to specify the context value, and call useContext(SomeContext) in components below to read it.

### `SomeContext.Provider`
- Wrap your components into a context provider to specify the value of this context for all components inside:
  ```javascript
  function App() {
    const [theme, setTheme] = useState('light');
    // ...
    return (
      <ThemeContext.Provider value={theme}>
        <Page />
      </ThemeContext.Provider>
    );
  }
  ```
- `value`: The value that you want to pass to all the components reading this context inside this provider, no matter how deep. The context value can be of any type. A component calling `useContext(SomeContext)` inside of the provider receives the `value` of the innermost corresponding context provider above it.
- Context is useful because you can provide other, dynamic values from your components.
- The `Page` component and any components inside it, no matter how deep, will “see” the passed context values. If the passed context values change, React will re-render the components reading the context as well.

### `useContext()`
- Read context with `useContext()`
  ```javascript
  function Button() {
    const theme = useContext(ThemeContext);
    return <button className={theme} />;
  }
  ```




# [Redux Toolkit (RTK)](https://redux-toolkit.js.org/tutorials/overview)

# [React Router](https://reactrouter.com/home)
- React Router is a popular library for handling navigation in React applications. It allows you to create single-page applications (SPAs) with multiple views by managing client-side routing.

### Why use React Router
1. Enables Navigation Without Page Refresh
   - Unlike traditional websites, React Router allows navigation between views without reloading the page.
2. Dynamic & Nested Routing
   - You can define nested routes and render components based on the URL.
3. URL Parameter Handling
   - Helps pass data via URL parameters (/user/:id) and query strings (?search=react).
4. Redirects & Protected Routes
   - Supports authentication-based access control (e.g., redirect if not logged in).
5. History Management
   - Uses the browser’s history API (pushState, replaceState) to manage navigation.

### Import BrowserRouter & Define Routes
```javascript
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Page</h1>;

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```
- `<BrowserRouter>` wraps the app to enable routing.
- `<Routes>` defines different paths.
- `<Route path="/" element={<Home />} />` renders `Home` for `/`.
- `<Link>` is used instead of `<a>` to prevent full-page reloads.


### Route Parameters (Dynamic Routes) with `useParams`
```javascript
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const { id } = useParams(); // Extract ID from URL
  return <h1>Viewing Profile of User {id}</h1>;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user/:id" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}
```
- Get information from URL and change UI content.

### Redirect & Navigate Programmatically (e.g., After Login)
```javascript
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  
  const handleLogin = () => {
    // Perform authentication logic
    navigate("/dashboard"); // Redirect after login
  };

  return <button onClick={handleLogin}>Login</button>;
};
```
- Clicking the button redirects to `/dashboard`.


# [Storybook](https://storybook.js.org/)
- It provides a user interface for visually displaying and testing individual components, allowing developers to rapidly iterate on and fine-tune their components.

# [Environment Variables](https://create-react-app.dev/docs/adding-custom-environment-variables/)
- Environment variables store configuration settings that can change depending on the environment (development, production, etc.). In React, they are used to keep sensitive or environment-specific data outside the codebase.

### Why use environment variables
- Security – Avoid exposing API keys in public repositories.
- Flexibility – Easily change settings between dev, test, and production.
- Maintainability – Keep configuration separate from the code.

### Example structure of a React project codebase
```
/my-react-app
│── public/        # Static assets (index.html, favicon, etc.)
│── src/           # Source code (components, styles, etc.)
│── .gitignore     # Files to exclude from Git
│── package.json   # Project dependencies & scripts
│── .env           # Environment variables
│── README.md      # Documentation
└── node_modules/  # Installed dependencies
```

### Naming Convention
- In React, environment variables must start with `REACT_APP_`
- Example .env file:
  ```
  REACT_APP_API_URL=https://api.example.com
  REACT_APP_VERSION=1.0.0
  ```

### Using Environment Variables in React
- You can access these variables using `process.env`
- Example: Using an API URL in a component
  ```javascript
  const apiUrl = process.env.REACT_APP_API_URL;

  console.log("API URL:", apiUrl);

  fetch(`${apiUrl}/data`)
    .then(response => response.json())
    .then(data => console.log(data));
  ```





# Deployment
- Some of the popular platforms that support automatic-deployment from a Git repo
  - [Vercel](https://vercel.com/)
  - [Netlify](https://www.netlify.com/)
  - [Render](https://render.com/)
  - [Github Pages](https://pages.github.com/)


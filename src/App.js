import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages";
import Abroad from "./pages/abroad";
import StudentLife from './pages/student-life';
import NavBar from './NavBar';
import Contact from './pages/contact';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className='page-content'>
          <Routes>
            {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
            <Route
              exact
              path="/"
              element={<Home />}
            />
  
            {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
            <Route
              exact
              path="/abroad"
              element={<Abroad />}
            />

            {/* This route is for student-life component
            with exact path "/student-life", in component props
            we pass the imported component */}
            <Route
              exact
              path="/student-life"
              element={<StudentLife />}
            />

            <Route
                exact
                path="/contact"
                element={<Contact />}
            />
  
            {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
            {/* <Redirect to="/" /> */}
            <Route
              path="*"
              element={<Navigate to="/" />}
            />
          </Routes>
        </div>
      </Router>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Filler page, put content here!
        </p>
      </header> */}
    </div>
  );
}

export default App;

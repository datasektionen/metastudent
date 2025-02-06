import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router";
import Home from "./pages/home";
import Abroad from "./pages/abroad";
import StudentLife from './pages/student-life';
// import NavBar from './NavBar';
import Sidebar from './Sidebar';
// import Header from './Header.js';
import Contact from './pages/contact';
import './new-styles.css'
// import NavBar from './NavBar.js';

function App() {

  return (
    <Router>
      <div className="wrapper App">
        <Sidebar />
        {/* <Header /> */}
        {/* <CeriseHeader /> */}
        {/* <Sidebar state={sidebarOpen} toggleSidebar={(e) => toggleSidebar(e)} />
                <Header
                  userRole={localStorage.getItem('userRole')}
                  userData={JSON.parse(localStorage.getItem('userData'))}
                  toggleSidebar={toggleSidebar}
                /> */}
        <div className='content-page'>
          <div className="container-fluid">
            <div className='row'></div>
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

              <Route
                exact
                path="/"
                element={<Home />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );

  // return (
  //   <div className="App">
  //     <Router>

  //       {/* <Header /> */}
  //       {/* <NavBar /> */}
  //       <div className='page-content'>

  //         <Sidebar />
  //         <Routes>
  //           {/* This route is for home component 
  //         with exact path "/", in component props 
  //         we passes the imported component*/}
  //           <Route
  //             exact
  //             path="/"
  //             element={<Home />}
  //           />

  //           {/* This route is for about component 
  //         with exact path "/about", in component 
  //         props we passes the imported component*/}
  //           <Route
  //             exact
  //             path="/abroad"
  //             element={<Abroad />}
  //           />

  //           {/* This route is for student-life component
  //           with exact path "/student-life", in component props
  //           we pass the imported component */}
  //           <Route
  //             exact
  //             path="/student-life"
  //             element={<StudentLife />}
  //           />

  //           <Route
  //             exact
  //             path="/contact"
  //             element={<Contact />}
  //           />

  //           {/* If any route mismatches the upper 
  //         route endpoints then, redirect triggers 
  //         and redirects app to home component with to="/" */}
  //           {/* <Redirect to="/" /> */}
  //           <Route
  //             path="*"
  //             element={<Navigate to="/" />}
  //           />


  //         </Routes>
  //       </div>
  //     </Router>
  //     {/* <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Filler page, put content here!
  //       </p>
  //     </header> */}
  //   </div>
  // );
}

export default App;

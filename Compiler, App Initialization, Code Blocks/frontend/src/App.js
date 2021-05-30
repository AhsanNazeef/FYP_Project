import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router,Route} from "react-router-dom";

import Navbar from "./components/navbar.component";
import MainPage from "./components/mainpage.component";
import Compiler from "./components/compiler.component";
import WorkSpace from "./components/workspace";



function App() {
  return (
    <Router>
      <div className="container">
        <Navbar/>
        <br/>
        <Route path="/" exact component={MainPage}/>
        <Route path="/workspace" exact component={WorkSpace}/>
        <Route path="/compiler" exact component={Compiler}/>
        <Route path="/user" exact component={Compiler}/>
      </div>
    </Router>
      
  );
}

export default App;

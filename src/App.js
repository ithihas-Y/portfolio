import React from 'react'
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Home from "./components/Home"
import post from "./components/Post"
import NavBar from "./components/Navbar"
import "./App.css";

function App() {
  return (
    <BrowserRouter >
      <NavBar/>
      <Switch>
        <Route component={Home} path='/' exact/>
        <Route component={post} path='/post'/>
      </Switch>

    </BrowserRouter>
    
  );
}

export default App;

import React from 'react'
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Home from "./components/Home"
import SinglePost from "./components/SinglePost"
import post from "./components/Post"
import about from "./components/about";
import project from "./components/project"
import NavBar from "./components/Navbar"
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route component={Home} path='/' exact/>
        <Route component={post} path='/post' exact/>
        <Route component={SinglePost} exact path='/post/:slug' />
        <Route component={project} path='/project'/>
        <Route component={about} path='/about' />
      </Switch>

    </BrowserRouter>
    
  );
}

export default App;

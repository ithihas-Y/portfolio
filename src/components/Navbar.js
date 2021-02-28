import React from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'

export default function NavBar() {
    return(
        <header>
            <div>
            <nav className="navbar">
                <NavLink activeClassName="home" to="/" exact>Home</NavLink>
                <NavLink to="/post">About</NavLink>
                <NavLink to="/post">Post</NavLink>
            </nav>
            </div>
            
        </header>
    );
    
}
import React from 'react'
import {NavLink} from 'react-router-dom'
import {Menu} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

export default function NavBar() {
    return(
        <div style={{marginTop:'1px'}}>
        <Menu size='huge' fluid widths={4} inverted>
        <Menu.Item
          name='home' 
        >
            <NavLink activeClassName="home" to="/" exact>Home</NavLink>
        </Menu.Item>

        <Menu.Item
          name='about'
        >
          <NavLink to="/about">About</NavLink>
        </Menu.Item>

        <Menu.Item
          name='post'
        >
         <NavLink to="/post">Posts</NavLink> 
        </Menu.Item>

        <Menu.Item name='ChatRoom'>
          <NavLink to="/chatroom">ChatRoom</NavLink>

        </Menu.Item>
      </Menu>
      </div>
    );
    
}


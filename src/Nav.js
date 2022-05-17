import React from 'react';
import { NavLink } from 'react-router-dom';
const Nav = ()=>{
      return <nav className="NavBar">
      <NavLink exact to="/">
        Dogs
      </NavLink>
    </nav>
    
}
export default Nav
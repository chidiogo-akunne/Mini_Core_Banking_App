import React from 'react';
import NavLogo from '../NavLogo/NavaLogo';
import MenuItems from '../MenuItems/MenuItems'

export default function SideNav(props) {
    return (
        <nav id="admin-side-nav">
      <div className="admin-side-nav-header">
        <NavLogo></NavLogo>
      </div>
      <div className="admin-side-nav-menu">
        <MenuItems></MenuItems>
      </div>
    </nav>
    )
}

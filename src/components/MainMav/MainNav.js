import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import './MainNav.css';


class Nav extends Component {

    render() {
        return (
            <nav className="MainNav">
                <h3 className="Logo">Contacts</h3>
                <NavLink className="NavLink"   activeClassName="Active" exact={true} to="/">Home</NavLink>
                <NavLink className="NavLink"  activeClassName="Active" to="/contacts/add">Add</NavLink>
            </nav>
        );
    }
}

export default Nav;
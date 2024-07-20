import React from 'react';

import { Link, NavLink } from 'react-router-dom';

export default ({ to, id = '', className = '', isNavBar = true, children }) => {
    const LinkComponent = isNavBar ? NavLink : Link;
    return (
        <li
            id={id || undefined}
            className={`nav-item${className ? ` ${className}` : ''}`}
        >
            <LinkComponent to={to}>{children}</LinkComponent>
        </li>
    );
};

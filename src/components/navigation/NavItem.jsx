import React from 'react';

import { Link } from 'react-router-dom';

export default ({ to, className = '', id = '', children }) => (
    <li
        id={id || undefined}
        className={`nav-item${className && ` ${className}`}`}
    >
        <Link to={to}>{children}</Link>
    </li>
);

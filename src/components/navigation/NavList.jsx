import React from 'react';

export default ({ id = '', className = '', children }) => (
    <ul
        id={id || undefined}
        className={`nav-list${className ? ` ${className}` : ''}`}
    >
        {children}
    </ul>
);

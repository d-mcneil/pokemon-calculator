import React from 'react';

export default ({ id = '', className = '', children }) => (
    <div
        id={id || undefined}
        className={`nav-logo${className ? ` ${navBarClassName}` : ''}`}
    >
        {children}
    </div>
);

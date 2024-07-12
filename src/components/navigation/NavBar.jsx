import React from 'react';

import NavList from './NavList';
import NavItem from './NavItem';

export default () => (
    <nav id="nav-bar">
        <NavList /* ul#nav-list */>
            <NavItem to={''}>nav text 1</NavItem> {/* li.nav-item */}
            <NavItem to={''}>nav text 2</NavItem>
        </NavList>
    </nav>
);

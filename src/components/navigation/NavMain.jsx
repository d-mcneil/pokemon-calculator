import React from 'react';

import NavBar from '@/components/navigation/NavBar';
import NavLogo from '@/components/navigation/NavLogo';
import NavList from '@/components/navigation/NavList';
import NavItem from '@/components/navigation/NavItem';

export default () => (
    <NavBar /* nav.nav-bar */
        id={'main-nav-bar'} /* nav#main-nav-bar */
        className={''}
    >
        <NavLogo /* div.nav-logo */
            id={'main-nav-logo'} /* div#main-nav-logo */
            className={''}
        />
        <NavList /* ul.nav-list */
            id={'main-nav-list'} /* ul#main-nav-list */
            className={''}
        >
            {/********************************* NAVIGATION ITEMS ********************************/}
            <NavItem /* li.nav-item > a */
                to={''}
                id={''}
                className={''}
                isNavBar
            >
                Nav Text 1
            </NavItem>{' '}
            <NavItem
                to={''}
                id={''}
                className={''}
                isNavBar
            >
                Nav Text 2
            </NavItem>
            {/***********************************************************************************/}
        </NavList>
    </NavBar>
);

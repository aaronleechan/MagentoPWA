import React, { Fragment, Suspense } from 'react';
import { shape, string } from 'prop-types';
import { useHeader } from '@magento/peregrine/lib/talons/Header/useHeader';
import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from '@magento/venia-ui/lib/components/Header/header.module.css';
import headerClasses from './header.module.css'
import { HeaderComponent } from './header_components';
import { NavComponent } from './nav_components';

const Header = props => {
    const {
        handleSearchTriggerClick,
        hasBeenOffline,
        isOnline,
        isSearchOpen,
        searchRef,
        searchTriggerRef
    } = useHeader();

    const classes = useStyle(defaultClasses, props.classes);
    const rootClass = isSearchOpen ? classes.open : classes.closed;

    return (
        <Fragment>
            <header className={headerClasses.container}>
                <HeaderComponent/>
                <NavComponent/>
            </header>
        </Fragment>
    );
};

Header.propTypes = {
    classes: shape({
        closed: string,
        logo: string,
        open: string,
        primaryActions: string,
        secondaryActions: string,
        toolbar: string,
        switchers: string,
        switchersContainer: string
    })
};

export default Header;

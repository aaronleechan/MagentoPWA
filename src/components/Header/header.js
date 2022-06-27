import React, { Fragment, Suspense } from 'react';
import { shape, string } from 'prop-types';
import { Link, Route } from 'react-router-dom';
import Logo from '@magento/venia-ui/lib/components/Logo'
import { useHeader } from '@magento/peregrine/lib/talons/Header/useHeader';
import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from '@magento/venia-ui/lib/components/Header/header.module.css';
import headerClasses from './header.module.css'
import {
    HeaderDeliverInfo,
    LanguageSelectBox,
    NavCart,
    ReturnOrderInfo,
    Search,
    UserInfo
} from './header_components';
import CartTrigger from '@magento/venia-ui/lib/components/Header/cartTrigger';

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
            <header className={headerClasses.container} data-cy="Header-root">
                <Logo classes={{ logo: headerClasses.logo }} />
                <HeaderDeliverInfo/>
                <Search/>
                <LanguageSelectBox/>
                <UserInfo/>
                <ReturnOrderInfo />
                <NavCart />
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

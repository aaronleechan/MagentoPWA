import React from 'react';

/* Component Module Alphabet Order */
import HeaderDeliverInfo from "./DeliverInfo/headerDeliverInfo";
import LanguageSelectBox from "./LanguageSelectBox/languageSelectBox";
import Logo from '@magento/venia-ui/lib/components/Logo'
import LogoBox from './LogoBox/logoBox'
import NavCart from './NavCart/navCart';
import ReturnOrderInfo from './ReturnOrderInfo/returnOrderInfo';
import Search from './NavSearch/navSearch';
import UserInfo from './UserInfo/userinfo';
/******************************************************** */

/* Class Class Module Alphabet Order */
import header_componentClasses from './header_component.module.css'
/******************************************************** */


const HeaderComponent = () =>{
    return(
        <div className={header_componentClasses.topHeadContainer} data-cy="Header-root">
            <LogoBox classes={{ logo: header_componentClasses.logo }} height={8} width={80}/>
            <HeaderDeliverInfo/>
            <Search/>
            <LanguageSelectBox/>
            <UserInfo/>
            <ReturnOrderInfo />
            <NavCart />
        </div>
    )
}

export default HeaderComponent;
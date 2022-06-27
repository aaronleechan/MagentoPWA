import React from 'react';
import { Search } from 'react-feather';
import navSearchclasses from './navSearch.module.css';

const NavSearch = () =>{

    const onSubmit = (e) =>{
        console.log("This is Submit ")
    }
    return(
        <form onSubmit={onSubmit} className={navSearchclasses.container}>
            <input type="text" placeholder="Search.. " name="search"></input>
            <button type="submit"> <i><Search size={30}/></i></button>
        </form>
    )
}

export default NavSearch;
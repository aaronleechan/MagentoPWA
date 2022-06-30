import React,{useState} from 'react';
import navContainerClass from './nav_component.module.css'
import { Menu } from 'react-feather';

export const ListComp = [
    {label: "Today's Deals"},
    {label: "Amazon Basics"},
    {label: "Buy Again"},
    {label: "Customer Service"},
    {label: "Best Sellers"},
    {label: "Groceries"},
    {label: "Gift Cards"},
    {label: "Coupons"},
    {label: "Pet Supplies"},
    {label: "Find a Gift"},
    {label: "Livestreams"},
    {label: "Beauty & Personal Care"},
    {label: "Home Improvement"},
    {label: "Watch LGBTQIA+ TV & film"}
]

const NavComponent = () =>{
    const [openNavBar,setOpenNavBar] = useState(false)

    return(
        <ul className={navContainerClass.navContainer}>
            <li className={navContainerClass.navFlowCol}>
                <div onClick={()=>setOpenNavBar(!openNavBar)}><Menu size={20}/></div>
                <div>All</div>
            </li>
            {
                ListComp.map((value,key)=>{
                    return <li key={key}>{value?.label}</li>
                })
            }
        </ul>
    )
}

export default NavComponent;
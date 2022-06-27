import React from "react";
import deliverInfoClasses from './headerDeliverInfo.module.css'
import headerClasses from '../../header.module.css'
import { MapPin } from 'react-feather';


const HeaderDeliverInfo = () =>{
    return(
        <div className={deliverInfoClasses.deliver_container}>
            <div className={`${headerClasses.small_text} ${deliverInfoClasses.small_textPos}`}>Deliver to Aaron</div>
            <div className={deliverInfoClasses.flow_row}>
                <div><MapPin size={18}/></div>
                <div className={headerClasses.highlight_text}>Mandalay 12345</div>
            </div>

        </div>
    )
}

export default HeaderDeliverInfo;
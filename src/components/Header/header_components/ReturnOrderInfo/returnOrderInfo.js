import React,{Fragment} from 'react';
import returnOrderInfoclasses from './returnOrderInfo.module.css'
import headerclasses from '../../header.module.css';

const ReturnOrderInfo = () =>{
    return(
        <Fragment>
            <div>
                <div className={`${headerclasses.small_text} ${returnOrderInfoclasses.small_textPos}`}>Returns</div>
                <div className={headerclasses.highlight_text}>& Orders</div>
            </div>
        </Fragment>
    )
}

export default ReturnOrderInfo;
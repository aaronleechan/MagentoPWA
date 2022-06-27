import React from 'react';
import userInfoclasses from './userinfo.module.css';
import headerclasses from '../../header.module.css';

const UserInfo = () =>{
    return(
        <div>
            <div className={`${headerclasses.small_text} ${userInfoclasses.small_textPos}`}>Hello,Kevin</div>
            <div className={userInfoclasses.grid_flow_col}>
                <div className={headerclasses.highlight_text}>Account & Lists</div>
                <div className={userInfoclasses.arrow_down}></div>
            </div>
        </div>
    )
}

export default UserInfo;
import React,{useEffect, useState} from "react";
import classes from './languageSelectBox.module.css'
import * as FLAG from 'country-flag-icons/react/3x2'

const LanguageSelectBox = () =>{
    const [selectFlag,setSelectFlag] = useState("")

    useEffect(()=>{
        flagUi()
    },[selectFlag])

    const handleChange = (e) =>{
        setSelectFlag(e.target.value)
    }

    const flagUi = () =>{
        if(selectFlag == "ES"){
            return <FLAG.ES title="Spanish" className={classes.flagIcon} />
        }
        return <FLAG.US title="United States" className={classes.flagIcon}/>
    }

    return(
        <div className={classes.flag_container}>
            {flagUi()}
            <select value={selectFlag} onChange={handleChange} id="languages" name="languages">
                <option value="US">EN</option>
                <option value="ES">SP</option>
            </select>
        </div>
    )
}

export default LanguageSelectBox
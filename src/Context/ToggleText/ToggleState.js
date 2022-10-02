import { useContext, useState } from "react";
import ToggleContext from "./ToggleContext";

const ToggleState = (props)=>{
    const [toggle, setToggle] = useState(false);
    const alterToggle = ()=>{
        setToggle(!toggle);
    }

    return (
        <ToggleContext.Provider value={{toggle, alterToggle}}>
            {props.children}
        </ToggleContext.Provider>
    )
}

export default ToggleState;
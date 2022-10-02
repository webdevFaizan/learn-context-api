import React,{useContext} from 'react'
import ToggleContext from '../Context/ToggleText/ToggleContext';

export default function ChildButton() {
    const {toggle, alterToggle} = useContext(ToggleContext);
    // const toggle = false;
  return (
    <>
        <button onClick={()=>{alterToggle()}}>
            Child Button
        </button>
        {toggle && <h1>Toggle</h1>}
    </>
  )
}

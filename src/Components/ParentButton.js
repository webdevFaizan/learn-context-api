import React, { useContext } from 'react'
import ToggleContext from '../Context/ToggleText/ToggleContext';
import ChildButton from './ChildButton';

export default function ParentButton() {
    const {alterToggle} = useContext(ToggleContext);
  return (
    <>
        <button onClick={()=>{alterToggle()}}>
            Parent Button
        </button>
        <ChildButton/>
    </>
  )
}

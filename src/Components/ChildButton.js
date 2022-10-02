import React from 'react'

export default function ChildButton() {
    const toggle = false;
  return (
    <>
        <button>
            Child Button
        </button>
        {toggle && <h1>Toggle</h1>}
    </>
  )
}

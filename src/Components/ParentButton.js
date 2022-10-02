import React from 'react'
import ChildButton from './ChildButton'

export default function ParentButton() {
  return (
    <>
        <button>
            Parent Button
        </button>
        <ChildButton/>
    </>
  )
}

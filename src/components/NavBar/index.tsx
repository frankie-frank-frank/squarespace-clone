import React from 'react'
import LNGS from './LNGS'
import PNR from './PNR'
import SquareSpaceLogo from './SquareSpaceLogo'

export default function NavBar() {
  return (
    <nav className='sticky inset-x-0 top-0 h-20 z-10 bg-squarespace flex px-3 py-3 items-center justify-between overflow-hidden' >
        <SquareSpaceLogo />
        <PNR />
        <LNGS />
    </nav>
  )
}

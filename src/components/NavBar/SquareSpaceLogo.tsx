import React from 'react'
///<reference path='../../index.d.ts' />
const logo = require('../../assets/logo.png');

function SquareSpaceLogo() {
  return (
    <div>
        <img className='w-64' src={logo} alt='squarespace-logo' />
    </div>
  )
}

export default SquareSpaceLogo
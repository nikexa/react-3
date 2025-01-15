import React from 'react'
import PurpleFirst from '../../__atoms/PurpleFirst/PurpleFirst'
import PurpleIMG from '../../__atoms/PurpleIMG/PurpleIMG'
import PurpleSecond from '../../__atoms/PurpleSecond/PurpleSecond'
import PurpleThird from '../../__atoms/PurpleThird/PurpleThird'
import './Purple.css'

const Purple = () => {
  return (
    <div className='rame'>
    <PurpleFirst />
    <PurpleIMG />
    <PurpleSecond />
    <PurpleThird />
    </div>
  )
}

export default Purple
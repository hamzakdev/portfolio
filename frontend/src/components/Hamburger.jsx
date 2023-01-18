import React, { useState } from 'react'
import '../additionalcss/hamburger.scss'
import Main from './Main'
import Menu from './Menu'
const Hamburger = () => {
  const [isChecked, setIsChecked] = useState(false)
  return (  
<div>

    <Menu isChecked={isChecked} setIsChecked={setIsChecked} />
    <div className='z-10'>
        <label htmlFor="check">
    <input onChange={()=>setIsChecked((prev)=>!prev)} type="checkbox" id="check"/> 
    <span></span>
    <span></span>
    <span></span>
  </label>
  </div>
</div>
  )
}

export default Hamburger
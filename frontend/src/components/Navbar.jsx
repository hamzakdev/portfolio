import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { navVariants } from '../motion'
import Profile from './Profile'
import Hamburger from './Hamburger'
import { Link } from 'react-router-dom'
const Navbar = () => {
 const [isChecked, setIsChecked] = useState(false)


  return (
    <motion.nav
    variants={navVariants}
    initial='hidden'
    animate="show" 
    className=' z-10 relative px-[3em]  '
    id='main'
    >

      <div className='flex justify-between '>
        <Link to='/' className='text-[#ffffff] text-[3rem]  '>HAMZA</Link>
        <Profile />
        <Hamburger className='mr-[20px] ' />
      </div>
    </motion.nav>


  )
}

export default Navbar
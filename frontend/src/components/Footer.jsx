import React from 'react'
import { motion } from 'framer-motion'
import {footerVariant} from '../motion'
const Footer = () => {
  return (
    <footer
    className=" py-8 relative mt-[10em]"  
    >
        <div className="  sm:p-16 xs:p-8 px-6 py-12  flex items-center  h-[100px] w-[100vw] absolute bottom-0" >
            <h1 className='text-white'>Copyright © 2023 - HamzaDev</h1>
        </div>
    </footer>
  )
}

export default Footer
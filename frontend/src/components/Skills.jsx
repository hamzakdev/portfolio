import React from 'react'
import { motion } from 'framer-motion'
import {roll, staggerContainer} from '../motion'

const Skills = () => {
  return (
    <section id='skills' className='sm:p-16 xs:p-8 px-6 py-12 relative z-10'>
        <h1
        className={`text-[5em] text-center mb-[0.5em] text-white`}
        
        >SKILLS</h1>
        <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{once:false, amount:0.25}}
        className={` w-full flex flex-col  `}
        >
        <motion.div
        variants={roll('left', 0.5)}
        className={`flex-1 flex flex-col justify-center mb-[2em] items-center`}
        >
            <img src='react.png' alt='REACT' className='w-[200px] h-[200px] object-contain ' />
            <h1 className='text-white text-[50px]'>REACT</h1>
        </motion.div>
        <motion.div
        variants={roll('right', 1)}
        className={`flex-1 flex justify-center flex-col mb-[2em] items-center`}
        >
            <img src='express.png' alt='EXPRESS' className=' w-[200px] h-[200px] object-contain ' />
            <h1 className='text-white text-[50px]'>EXPRESS</h1>

        </motion.div>
        <motion.div
        variants={roll('left', 1.5)}
        className={`flex-1 flex justify-center flex-col mb-[2em] items-center`}
        >
            <img src='node.png' alt='NODE JS' className='w-[200px] h-[200px] object-contain ' />
            <h1 className='text-white text-[50px]'>NODE</h1>
            
        </motion.div>
        <motion.div
        variants={roll('right', 2)}
        className={`flex-1 flex justify-center flex-col mb-[2em] items-center`}
        >
            <img src='mongodb.png' alt='MONGODB' className='w-[200px] h-[200px] object-contain ' />
            <h1 className='text-white text-[50px]'>MONGODB</h1>

        </motion.div>

        </motion.div>

    </section>
  )
}

export default Skills
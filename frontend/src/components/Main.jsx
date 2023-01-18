import React from 'react'
import '../additionalcss/main.scss'
import {motion} from 'framer-motion'
import { roll, slideIn, staggerContainer, textVarient } from '../motion'
import { Link } from 'react-router-dom'


const Main = () => {
  return (
    <motion.div  className='main-container'
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{once:false, amount: 0.25}}
    >
        <motion.div
        
        className="main-container-left"
        variants={slideIn('left','tween',0  ,1)}
        >
            <h1>Hi</h1>
            <p>I am Hamza. I am a self taught Web Developer based in Karachi, Pakistan. I have a solid grasp on concepts of JavaScript and Programming in general</p>
            <p>I am in love with the process of developing amazing and highly   functional user interfaces using the most in-demand Technologies </p>
            <Link to='/projects' className='main-btn'>Projects</Link>
            </motion.div>
        <motion.div
         className="main-container-right"
         variants={slideIn('right','tween',0.5  ,1  )}
         >
            <h1>Skills</h1>
            <motion.div className='skills-container'
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{once:false, amount:0.25}}
            >
                <motion.img
                 className='skills-img'
                 src='node.png'
                 variants={textVarient(0.5)}
                 ></motion.img>
                <motion.img
                 className='skills-img'
                 src='react.png'
                 variants={textVarient(1)}
                 ></motion.img>
                <motion.img
                 className='skills-img'
                 src='mongodb.png'
                 variants={textVarient(1.5)}
                 ></motion.img>
                <motion.img
                 className='skills-img'
                 src='express.png'
                 variants={textVarient(2)}
                 ></motion.img>
                <motion.img
                 className='skills-img'
                 src='framermotion.png'
                 variants={textVarient(2.5)}
                 ></motion.img>
                <motion.img
                 className='skills-img'
                 src='mysql.png'
                 variants={textVarient(3)}
                 ></motion.img>
            </motion.div>
         </motion.div>
        </motion.div>
  )
}

export default Main
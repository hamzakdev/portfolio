import React from 'react'
import { Link } from 'react-router-dom'
import '../additionalcss/menu.scss'
import CategoryIcon from '@mui/icons-material/Category';
import HomeIcon from '@mui/icons-material/Home';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const Menu = ({isChecked, setIsChecked}) => {
  return (  
    <div style={{right: isChecked ? '0' : '-250px'}} className='menu-container'>
        <div>
         <Link  className='menu-links' to="/"><HomeIcon /> Home  </Link>
            <Link className='menu-links' to="/projects"> <CategoryIcon /> Projects</Link>
            <Link className='menu-links' to="/contact"><ContactMailIcon /> Contact </Link>
        </div>
    </div>
  )
}

export default Menu
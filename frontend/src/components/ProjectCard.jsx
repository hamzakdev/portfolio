import React from 'react'
import { Link } from 'react-router-dom'
import '../additionalcss/project-card.scss'

const ProjectCard = ({name, image, setActive, _id}) => {
const handleClick = ()=>{
  setActive(_id)
    window.scrollTo({ top: 0, behavior: 'smooth' })

}

  return (
    // <Link>
    <div onClick={handleClick} className='project-card-container'>
      <img className='card-image' src={image} alt="" />
      <span className='card-name' >{name}</span>
      </div>
    // </Link>
  )
}

export default ProjectCard
import React, { useEffect } from 'react'
import {motion} from 'framer-motion'  
import { useState } from 'react'
import ProjectCard from './ProjectCard'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProjects } from '../apiCalls/projectsApi'
import '../additionalcss/projects.scss'
import ProjectViewer from './ProjectViewer'
import { RingLoader } from 'react-spinners';


export const Projects = () => {
        const [active, setActive] = useState(null)
        const dispatch = useDispatch()
        const {projects, isFetching, error} = useSelector(state=>state.projects)
        useEffect(()=>{
          
          getAllProjects(dispatch)

        },[dispatch])
        

  return (
      <div >
        {
          isFetching ?  <div className='sweet-loading'>
          <RingLoader
            color={'#ffffff'} 
            loading={true} 
          />
        </div> :
          <motion.div
          className="projects-container"
          >
        <h1
         
         className=""
         >
            PROJECTS
        </h1>
        
        <div className='projects-secondary-container'>
        <div className='projects-right-container'>
            <div className='project-viewer-container'>
            <ProjectViewer active={active} />

            </div>
          </div>

          <div className='projects-left-container'>
            {
              projects.map((p)=>(
                <ProjectCard key={p._id} {...p} setActive={setActive}/>
                ))
            }
          </div>
         
        </div>
        </motion.div>
              }
                </div>
  )
}

import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleProject } from '../apiCalls/projectsApi'
import '../additionalcss/project-viewer.scss'
import { RingLoader } from 'react-spinners'


const ProjectViewer = ({active}) => {
    const {project, isFetching} = useSelector(state=>state.project)
    const dispatch = useDispatch()
    useEffect(()=>{
        active && getSingleProject(dispatch, active)
    },[dispatch,active])

  return (
    <>
    {
        !active ? <div className='select-project'><h1>SELECT A PROJECT TO SHOW</h1></div> :
        isFetching ? <div className='sweet-loading'>
        <RingLoader
          color={'#ffffff'} 
          loading={true} 
        />
      </div>:
        <div style={{width:'100%', height:'100%'}}>
        <img className='project-viewer-img' src={project.image}></img>
        <a target='_blank' className='project-links' href={project.github}>Github</a>
        <a target='_blank' className='project-links' href={project.link}>Live</a>
        <h3 className='project-viewer-name'>{project.name}</h3>
        <p className='project-viewer-desc'>{project.description}</p>
        <h3 className='project-viewer-name'>Skills</h3>
        {project?.skills?.map((s)=>(  
            <span key={s} className='project-viewer-skill'>{s}</span>
            
            ))}
            </div>
        }
        </>
  )
}

export default ProjectViewer
import React from 'react'
import { Link } from 'react-router-dom'
import '../additionalcss/profile.css'

const Profile = () => {
  return (
    <div className="social-container">
        
        <div className="social-icons">
            <a target='_blank' href="https://www.facebook.com/hamzakhan.ak4/"><i className="fa fa-facebook"></i></a>
        </div> 
        
         <div className="social-icons">
            <a target="_blank" href="https://www.linkedin.com/in/hamza-naeem-b44496256">

            <i className="fa fa-linkedin"></i>
            </a>
        </div> 
        
         <div className="social-icons">
         <a target="_blank" href="https://www.pinterest.com/hamzakhanisback112/">

<i className="fa fa-pinterest"></i>
</a>
        </div> 
        
         <div className="social-icons">
         <a target="_blank" href="https://www.youtube.com/channel/UC5jzKPZ2EtXpMH4_Za7SLJw">

<i className="fa fa-youtube"></i>
</a>
        </div> 
        
        <div className="social-icons">
            <i className="fa fa-instagram"></i>
        </div> 
        
        <div className="social-image">
            <img src="pfp.jpg" />
        </div>
    </div>
    
  )
}

export default Profile
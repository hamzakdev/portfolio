import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Contact = () => {
  return (
    <div style={{height:'100vh', width:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>

    <a href="mailto:devhamzak@gmail.com"><EmailIcon /> : devhamzak@gmail.com</a>
    <a target='blank' href="https://www.facebook.com/hamzakhan.ak4/"><FacebookIcon style={{color:'#1877f2'}}  /> : @hamzakhan.ak4</a>
    <a target='blank' href="https://www.linkedin.com/in/hamza-develops/"><LinkedInIcon style={{color:'#e26117'}} /> : @hamza-develops</a>
    <a target='blank' href="https://wa.me/+923341126163"><WhatsAppIcon style={{color:'#0b8b2b'}}  /> : +923341126163</a>

    </div>
  )
}

export default Contact
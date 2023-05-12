import React from 'react'
import '../assets/css/style.css'
import '../assets/css/font-awesome.css'
import '../assets/css/bootstrap.min.css'
import video from '../assets/images/video1.mp4'
const Video = () => {
  return (
    
    <video autoPlay muted loop id="bg-video" >
      <source src={video} type="video/mp4" />
    </video>
  
  )
}

export default Video

// const styles={
  
//     position: 'fixed',
//     zIndex: '-1',
//     top: '0',
//     left: '0',
//     width: '100%',
//     height: '100%',
//     objectFit: 'cover'}
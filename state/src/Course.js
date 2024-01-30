import React from 'react'
import java from './images/java.png'
import csharp from './images/csharp.png'
import javascript from './images/javascript.png'
import reactt from './images/react.png'
import './Course.css'


const courseMap = {
    java,
    csharp,
    javascript,
    reactt,
}

function Course({courseName}) {
    // console.log(java)
    // console.log(courseName)
    console.log(courseMap[courseName])
  return (
    <div className='courseDiv'>
        <img className='course' src={courseMap[courseName]} alt='course'></img>
    </div>
  )
}

export default Course;
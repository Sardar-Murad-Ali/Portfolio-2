import React from 'react'
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";


  
  
  
  

const Skills = () => {
   


  return (
    <div className='SkillsMain'>
      <h1 style={{marginLeft:"43%"}}>Skills</h1>
      <p>I live in Pakistan in Punjab Bahawalpur. I m a student who is trying to learn Mern Stack development. I can create backend API UI/UX design and Full Stack responsive, scaleable, interactive websites. I use Material UI for most of the UI-related stuff. And use MongoDB as a database. Using NodeJs as the backend language and making the RestFul API, S.</p>
      
      <CircularProgressbar
        className="Progress"
        value={60}
        text={`${60}%`}
        background
        backgroundPadding={6}
        styles={buildStyles({
          backgroundColor: "#3e98c7",
          textColor: "#fff",
          pathColor: "#fff",
          trailColor: "transparent"
        })}
      />

    </div>
  )
}

export default Skills

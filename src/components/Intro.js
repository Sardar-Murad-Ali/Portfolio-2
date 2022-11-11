import React from 'react'
import "./index.css"
import Typewriter from 'typewriter-effect';
import Pic from "../images/Pic.jpg"
const Intro = () => {
  return (
    <div style={{padding:"2rem 7%"}} className="Intro__Main home" id="home">

      <div className='Intro__Text'>
        <button className='helium-button'>Welcome to my portfolio</button>
        <h1 className='name'>Hi, I Am Sardar Ali</h1>
           
        <h2 className='skills-info'>
         <Typewriter
          className="skills"
          options={{
          strings: ['React Developer', 'Node Js Developer','MongoDb Expert'],
          autoStart: true,
           loop: true,
       }}
       />
        </h2>

       <p className='info'>My name is Sardar Ali Murad, I'm a student of Software Engineering and I am currently learning MERN STACK. I create projects using ReactJs and NodeJs with a bunch of external libraries</p>
             
      </div>

      <div>
         <img src={Pic} style={{height:"400px",width:"400px",borderRadius:"50%"}}/>
      </div>


    </div>
  )
}

export default Intro

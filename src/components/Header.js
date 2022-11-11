import React from 'react'
import Pic from "../images/Pic.jpg"
import {RiFacebookLine} from "react-icons/ri"
import {RiLinkedinLine} from "react-icons/ri"
import {FaInstagram} from "react-icons/fa"
import "./index.css"

const Header = () => {
  return (
    <div className='Headers__Mian'>

      <div className='image'>
        <img src={Pic} style={{height:"50px",width:"50px",borderRadius:"50%"}}/>
      </div>

      <div style={{display:"flex"}}>
        <div className='links'>
           <a href='#home'>Home</a>
           <a href='#skills'>Skills</a>
           <a href='#project'>Project</a>
        </div>

        <div className='Headers__icons'>
          <RiFacebookLine className='icon'/>
          <RiLinkedinLine className='icon'/>
          <FaInstagram className='icon'/>
        </div>

        <div>
           <button className='Header__Btn'>Lets Connect</button>
        </div>


      </div>

    </div>
  )
}

export default Header

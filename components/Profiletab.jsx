import Image from 'next/image'
import React from 'react'
import {RiTwitterXFill} from "react-icons/ri"
import {BsTwitch,BsYoutube,BsInstagram,BsDiscord,BsLinkedin} from "react-icons/bs"
export default function Profiletab() {
  return (
    <div className='profileSectn'>
      <div className="banner">
        <Image src={'/images/banner.jpg'} className='bannImg' width={200} height={200}/>
      </div>
      <div className="profile-details  ">
        <Image src={'/images/avatar2-5.png'} alt='' height={150} width={140}/>
        <div className="full-details" >
        <h1 className="name">WESLEY AARONS</h1>
          <p className="job">Web developer</p>
        </div>
        <div className="socials flex gap-4 mt-3">
          <RiTwitterXFill/>
          <BsTwitch/>
          <BsYoutube/>
          <BsInstagram/>
          <BsLinkedin/>
          <BsDiscord/>
        </div>
      </div>
     
    </div>
  )
}

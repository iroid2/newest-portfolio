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
      <div className="profile-details">
        <div className="prof-top">
        <Image src={'/images/prof.jpg'} alt='' height={150} width={140}/>
        <div className="bg-rect"></div>
        </div>
        <div className="full-details" >
        <h1 className="name text-center">iroid</h1>
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
        <div className="follows ">
          <h2 className='followBtn' >Follow Twitch </h2>
          <h2 className='contactBtn'>CONTACT ME </h2>
      </div>
      </div>
    </div>
  )
}

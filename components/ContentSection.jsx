// "use client"
import React from 'react'
import Sectiontitle from './Sectiontitle'
import Sectiondescription from './Sectiondescription'
import { BsTwitch } from 'react-icons/bs'
export default function ContentSection({title}) {
  return (
    <div className='contentSection'>
      <h1><Sectiontitle title={'About Me'} /></h1>
      <p className="description">
       <Sectiondescription desc={'Hello! I’m Wesley Ryan.'}/>
       <Sectiondescription desc={'I am a streamer, I love playing video games or interacting with an online audience, and I also like to broadcast online. Check out our featured videos, clips and highlights.'}/>
      </p>
      <div className="services">
        <Sectiontitle title={'Services'}/>
        <div className="servicesCards grid grid-cols-2">
          <div className="servicesCard ">
            <BsTwitch className='text-6xl bg-teal-900 rounded-full p-3'/>
            <Sectiontitle title={'Twitch Streaming'} />
            <Sectiondescription desc={'American video live streaming service that focuses on video game live streaming.'}/>
          </div>
          <div className="servicesCard p-3">
            <BsTwitch className='text-6xl bg-teal-900 rounded-full p-3'/>
            <Sectiontitle title={'Twitch Streaming'} />
            <Sectiondescription  desc={'American video live streaming service that focuses on video game live streaming.'}/>
          </div>
          <div className="servicesCard  p-3">
            <BsTwitch className='text-6xl bg-teal-900 rounded-full p-3'/>
            <Sectiontitle title={'Twitch Streaming'} />
            <Sectiondescription desc={'American video live streaming service that focuses on video game live streaming.'}/>
          </div>
          <div className="servicesCard  p-3">
            <BsTwitch className='text-6xl bg-teal-900 rounded-full p-3'/>
            <Sectiontitle title={'Twitch Streaming'} />
            <Sectiondescription desc={'American video live streaming service that focuses on video game live streaming.'}/>
          </div>
        </div>
      </div>
    </div>
  )
}

// "use client"
import React from 'react'
import Sectiontitle from './Sectiontitle'
import Sectiondescription from './Sectiondescription'
import { BsTwitch,BsRocketTakeoff } from 'react-icons/bs'
import { FiChevronRight } from 'react-icons/fi'
import Image from 'next/image'
export default function ContentSection({title}) {
  return (
    <div className='contentSection scrollbar-thin scrollbar-thumb-purple-500  scrollbar-track-slate-700'>
      <h1 className='content-title'><Sectiontitle title={'About Me'} /></h1>
      <div className="description">
       <Sectiondescription desc={'Hello! I’m Tukaheebwa Irad.'}/>
       <Sectiondescription desc={'I am a web Developer, i love take advantage of recent technogies in the field of web development to come up with complex and attractive web apps.'}/>
      </div>
      <div className="services ">
        <Sectiontitle className='px-4 bg-red-500 ' title={'Services'}/>
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
      <div className="pricing ">
        <Sectiontitle className='px-4 bg-red-400' title={'Pricing'}/>
        <div className="pricingCards flex">
          <div className="pricing-card flex flex-col items-center ">
            <BsRocketTakeoff className='text-5xl  text-purple-800 p-2 bg-zinc-200 rounded-full 
border-1-purple-500'/>
            <p className='text-white'>Popular</p>
            <p className='text-x1 text-white'>$<span className='text-4xl '>59</span>hr</p>
            <p className='text-white'>Video Streaming</p>
            <p className='text-white'>Advetise on Youtube</p>
            <p className='text-white'>Advetise on Twitch</p>
            <p className='text-white'>Social Media Share</p>
            <p className='text-white'>Instagram Stories</p>
            <div className="order">
              <button className="orderBtn text-white  items-center flex  px-10">Order <FiChevronRight/></button>
            </div>
          </div>
          <div className="pricing-card flex flex-col items-center ">
            <BsRocketTakeoff className='text-5xl  text-purple-800 p-2 bg-zinc-200 rounded-full 
border-1-purple-500'/>
            <p className='text-white'>Popular</p>
            <p className='text-x1 text-white'>$<span className='text-4xl '>59</span>hr</p>
            <p className='text-white'>Video Streaming</p>
            <p className='text-white'>Advetise on Youtube</p>
            <p className='text-white'>Advetise on Twitch</p>
            <p className='text-white'>Social Media Share</p>
            <p className='text-white'>Instagram Stories</p>
            <div className="order ">
              <button className="orderBtn  text-white items-center flex px-10">Order <FiChevronRight/></button>
            </div>
          </div>
        </div>
      </div>
      <div className="clients-sectn ">
        <Sectiontitle  title={'Clients'} />
        <div className="clients-cards ">
        <div className="client">
          <Image src={'/images/goog.png'} alt='' height={100} width={100}/>
        </div>
        <div className="client">
          <Image src={'/images/goog.png'} alt='' height={100} width={100}/>
        </div>
        <div className="client">
          <Image src={'/images/goog.png'} alt='' height={100} width={100}/>
        </div>
        <div className="client">
          <Image src={'/images/goog.png'} alt='' height={100} width={100}/>
        </div>
        </div>
       
      </div>
    </div>
  )
}

// "use client"
import React from 'react'
import Sectiontitle from './Sectiontitle'
import Sectiondescription from './Sectiondescription'
import { BsTwitch,BsRocketTakeoff } from 'react-icons/bs'
import { MdAlbum } from 'react-icons/md'
import { BiSolidQuoteRight,BiSolidQuoteLeft} from 'react-icons/bi'
import { FiChevronRight } from 'react-icons/fi'
import Image from 'next/image'
export default function ContentSection({title}) {
  return (
    <div className='contentSection scrollbar-radius-50 scrollbar-thin scrollbar-thumb-purple-500  scrollbar-track-slate-700'>
      <h1 className='content-title'><Sectiontitle title={'About Me'} /></h1>
      <div className="description">
       <Sectiondescription desc={'Hello! I’m Tukaheebwa Irad.'}/>
       <Sectiondescription desc={'I am a web Developer, i love take advantage of recent technogies in the field of web development to come up with complex and attractive web apps.'}/>
      </div>
      <div className="services ">
      <h1 className='content-title p-4'><Sectiontitle title={'Services'} /></h1>
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
      <h1 className='content-title p-4'><Sectiontitle title={'Pricing'} /></h1>
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
      <h1 className='content-title p-4'><Sectiontitle title={'Clients'} /></h1>
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
      <div className="testimony">
      <h1 className='content-title p-4'><Sectiontitle title={'Testimony'} /></h1>
        <div className="testim-slider">
          <p className="client-feedback flex text-center">
            <BiSolidQuoteLeft/> Lorem ipsum dolor, Lorem ipsum dolor sit. sit amet consectetur Lorem, ipsum dolor. adipisicing elit.<br></br> <BiSolidQuoteRight/>
          </p>
          <Image src={'/images/client.png'} alt='' height={100} width={100}/>
        </div>
      </div>
      <div className="fun-facts ">
      <h1 className='content-title p-4'><Sectiontitle title={'Testimony'} /></h1>
      <div className="fact-details">
        <div className="factCard border-none flex flex-col items-center">
          <MdAlbum className='icon text-white text-2x1'/>
          <p>80+
Albumes Listened</p>
        </div>
        <div className="factCard flex flex-col items-center">
          <MdAlbum className='icon text-white text-2x1'/>
          <p>15+
Awards Won</p>
        </div>
        <div className="factCard flex flex-col items-center">
          <MdAlbum className='icon text-white text-2x1'/>
          <p>80+
Albumes Listened</p>
        </div>
        <div className="factCard flex flex-col items-center">
          <MdAlbum className='icon text-white text-2x1'/>
          <p>80+
Albumes Listened</p>
        </div>
      </div>
      </div>
      <div className="resume">
        <div className="resum-details">
        <h1 className='content-title'><Sectiontitle title={'Resume'} /></h1>
        <div className="resumCards">
        <div className="resum-card ">
          <div className="card-title-details flex">
          <MdAlbum className='icon text-white text-2x1'/>
          <h1 className='content-title'><Sectiontitle title={'EXPERIENCE'} /></h1>
          </div>
        </div>
        <div className="resum-card ">
          <div className="card-title-details flex">
          <MdAlbum className='icon text-white text-2x1'/>
          <h1 className='content-title'><Sectiontitle title={'EDUCATION'} /></h1>
          </div>
        </div>
        </div>
        </div>
        <div className="skills-details"></div>
      </div>
    </div>
  )
}

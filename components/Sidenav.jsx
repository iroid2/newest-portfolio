import Image from 'next/image'
import React from 'react'
import {HiMenuAlt1} from 'react-icons/hi'
import {FiSun} from 'react-icons/fi'
import {BiSolidUserBadge} from 'react-icons/bi'

export default function Sidenav() {
  return (
    <div className='sideBar '>
        <div className="topSideBar flex justify-between">
          <div className="left-topside">
          <div className="profile flex md:hidden lg:hidden sm:block" >
            <Image src={'/images/avatar2-5.png'} alt='' width={40} height={40}/>
            <div className="profile-details">
              <p className="name">
                Welsely
              </p>
              <p className="role">
                content Creator
              </p>
            </div>
          </div>
          </div>
          <div className="right-topside md:flex-col sm:flex-row  gap-3">
            <HiMenuAlt1 className='text-2xl mb-3'/>
            <FiSun className='text-2xl'/>
          </div>
        </div>
        <div className="bottmSideBar flex flex-col gap-4">
          <div className="menu-detail ">
            <BiSolidUserBadge className='text-3xl text-center'/>
            <p className='text-sm text-center'>About</p>
          </div>
          <div className="menu-detail">
            <BiSolidUserBadge className='text-3xl item-center'/>
            <p>About</p>
          </div>
          <div className="menu-detail">
            <BiSolidUserBadge className='text-3xl align-center'/>
            <p>About</p>
          </div>
          <div className="menu-detail">
            <BiSolidUserBadge className='text-3xl align-center'/>
            <p>About</p>
          </div>
          <div className="menu-detail">
            <BiSolidUserBadge className='text-3xl align-center'/>
            <p>About</p>
          </div>
          <div className="menu-detail">
            <BiSolidUserBadge className='text-3xl align-center'/>
            <p>About</p>
          </div>
        </div>
        </div>
  )
}
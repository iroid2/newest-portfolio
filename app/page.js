import ContentSection from '@/components/ContentSection'
import Sidenav from '@/components/Sidenav'
import Profiletab from '@/components/Profiletab'
import React from 'react'
import Hiddenmenu from '@/components/Hiddenmenu'

export default function page() {
  return (
    <div className='homeContainer w-[98vw] h-[94vh]'>
      
      <Sidenav/>
      <Profiletab/>
      <ContentSection/>
    </div>
  )
}

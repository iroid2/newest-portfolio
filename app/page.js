import ContentSection from '@/components/ContentSection'
import Sidenav from '@/components/Sidenav'
import Profiletab from '@/components/Profiletab'
import React from 'react'

export default function page() {
  return (
    <div className='homeContainer w-[96vw] h-[94vh]'>
      <Sidenav/>
      <Profiletab/>
      <ContentSection/>
    </div>
  )
}

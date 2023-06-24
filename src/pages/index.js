

import React from 'react'
import Hero from '../component/BlogComponents/Hero'

import MainLayout from '../component/Layout/MainLayout.jsx'

import SectionOne from '@/component/BlogComponents/SectionOne'
import SectionTwo from '@/component/BlogComponents/SectionTwo'
import { apiUrl } from 'utils'
import CategoriesSection from '@/component/BlogComponents/CategoriesComponents'



export default function Home({ data }) {
  console.log("fv", data)

  let metadata = {
    title: 'Home Page',
    description: 'Amaizing site'
  }
  return (
    <MainLayout meta={metadata} >
      <div className='h-max w-full'>
        <Hero />
      </div>

      <div className='w-full border-primaryColor/40 pb-12 px-5 lg:px-0 border-b-2'>
        <SectionOne />
      </div>
      {/* <div className='w-full px-5 lg:px-0'>
        <SectionTwo />
      </div> */}
      <CategoriesSection />

    </MainLayout>

  )
}

import React from 'react'
import HeaderBanner from '../components/header-banner'
import Navbar from '../components/navbar'
import SectionHeading from '../components/section-heading'
import SimpleCentered from '../components/simple-centered'

export default function Home() {
  return (
    <>
    <Navbar />
    <div className='mt-5'>
    <SimpleCentered />
    </div>
    <SectionHeading />
    </>
  )
}

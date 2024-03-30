import React from 'react'
import {HomeSlide} from '../Components/HomeSlide'
import {PageDetails} from '../Components/PageDetails'
import { TopNav } from './TopNav'
import { Aside } from './Aside'
import { Footer } from './Footer'

export const HomePage = () => {
  return (
    <div>
        {/* <TopNav/> */}
        <HomeSlide/>
        <PageDetails/>    
        {/* <Footer/> */}
    </div>
  )
}

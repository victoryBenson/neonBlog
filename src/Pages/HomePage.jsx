import React from 'react'
import {HomeSlide} from '../Components/HomeSlide'
import {PageDetails} from '../Components/PageDetails'
import { TopNav } from './TopNav'
import { Aside } from './Aside'
import { Footer } from './Footer'
import Wrapper from '../Components/Wrapper'

export const HomePage = () => {
  return (
    <Wrapper>
        {/* <TopNav/> */}
        <HomeSlide/>
        <PageDetails/>    
        {/* <Footer/> */}
    </Wrapper>
  )
}

import React from 'react'

import { BlogContent } from '../Components/BlogContent'
import { Aside } from './Aside'

export function Blog() {
  
  return (
    <div className='relative lg:mx-10 md:mx-5 mx-3 max-w-[1400px] min-h-[100vh] md:flex justify-around my-10'>
      <div className='md:w-2/3'>
        <BlogContent/>
      </div>
      <Aside />
    </div>
  )
}

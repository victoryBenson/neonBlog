import React from 'react'
import createContent from '../assets/images/createContent.png'
import {LuFilePlus2} from 'react-icons/lu'

export const Write = () => {
  return (
    <div className=' md:flex justify-center items-center max-h-[100vh] m-auto mx-5'>
       <div className='md:w-2/3 md:mx-1/2 mb-20'>
            <p className=' rounded-xl flex justify-center items-center h-60 w-full'>
                <img src={createContent} alt="image" className='rounded-xl h-full w-full md:w-2/3 object-cover ' />
            </p>
            <form action="" method="post" className='text-center w-full '>
                <span className='items-center flex  flex-wrap p-1 justify-center'>
                    <label htmlFor="fileInput" className=''><LuFilePlus2/></label>
                    <input type="file" id='fileInput' className='hidden'/>
                    <input type="text" className='h-12 md:w-3/4 m-2 bg-stone-200 px-3 capitalize font-bold text-xl rounded outline-none ' placeholder="title"/>
                </span>
                <div className='' >
                    <textarea name="textarea" id="textArea" cols="30" rows="10" className='w-full h-full outline-none rounded p-2 px-3ho' placeholder='Type your text here...'></textarea>
                </div>
                <div className='font-bold text-white my-2 w-full'>
                    <input type="submit" value="Publish" className='bg-[#EC094D] md:w-3/4 w-full p-3 duration-500 hover:bg-white hover:text-[#ec094d] rounded-full ' />
                </div>
            </form>
       </div>
    </div>
  )
}
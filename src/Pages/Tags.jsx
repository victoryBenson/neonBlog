import React, { useState } from 'react'
import travelTag from '../assets/images/travelTag.png'
import forestTree from '../assets/images/forestTree.jpeg'
import foodTag from '../assets/images/foodTag.png'
import technologyTag from '../assets/images/technologyTag.png'
import inspirationTag from '../assets/images/inspirationTag.png'
import lifestyleTag from '../assets/images/lifestyleTag.png'
import healthTag from '../assets/images/healthTag.png'
import {PiToggleLeftDuotone} from 'react-icons/pi'
import {PiToggleRightDuotone} from 'react-icons/pi'

export const tagData = [

    {
        id: 1,
        image: `${healthTag}`,
        title: 'Health',
        post: '7 posts'

    },
    {
        id: 2,
        image: `${foodTag}`,
        title: 'Food',
        post: '9 posts'

    },
    {
        id: 3,
        image: `${travelTag}`,
        title: 'Travel',
        post: '4 posts'
    },
    {
        id: 4,
        image: `${technologyTag}`,
        title: 'Technology',
        post: '9 posts'

    },
    {
        id: 5,
        image: `${lifestyleTag}`,
        title: 'Lifestyle',
        post: '5 posts'

    },
    {
        id: 6,
        image: `${inspirationTag}`,
        title: 'Inspiration',
        post: '8 posts'

    },
    {
        id: 7,
        image: `${forestTree}`,
        title: 'Nature',
        post: '6 posts'

    }
]


export const Tags = () => {
    const [toggle, setToggle] = useState(false)
    
    // setToggle btn
    const handleClick = () => {
        setToggle(!toggle)
        toggle?  tagData.reverse() : tagData.sort((a,b) => a.title.localeCompare(b.title))
    }
  return (
    <div className='max-w-[1400px]'> 
        <div className='text-center font-bold text-3xl pt mb-16'>
            <h1>Tags</h1>
        </div>
        <div onClick={handleClick} className='p-2 md:p-5 md:mx-10 flex items-center '>
            {
                toggle? 
                (< PiToggleRightDuotone 
                size={30} 
                className='text-[#EC094D]'
                 /> ) 
                :
                <PiToggleLeftDuotone size={30}/>
            }
            <span className='ml-4 text-stone-600'>Sort alphabetically</span>
        </div>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 md:mx-12 sm:mx-10 mx-5 mb-40'>
            {
                    
                tagData?.map((item,idx)=> {
                    return (
                        <div key={idx} className='bg-white rounded-xl p-3 group'>
                            <div className='flex flex-col justify-between w-full h-60  border rounded-xl group-hover:cursor-pointer ' >
                                <div className='bg-blue h-2/3 w-full group'>
                                    <img src={item.image} alt="" className='rounded-t-xl object-cover h-full w-full group-hover:scale-95 ease-in duration-300 transition delay-150' />
                                </div>
                                <div className='h-1/3  p-2 mt-1 rounded-xl'>
                                    <p className='font-bold'>{item.title}</p>
                                    <p className='text-stone-700 '>{item.post}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

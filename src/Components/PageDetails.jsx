import React, { useState, } from 'react'
import {BsCalendarDate} from 'react-icons/bs'
import {TfiTime} from 'react-icons/tfi'
import { Aside } from '../Pages/Aside'
import { Link} from 'react-router-dom'
import { Blog } from '../Pages/Blog'
import slider5 from '../assets/images/slider5.png'
import slider4 from '../assets/images/slider4.png'
import slider2 from '../assets/images/slider2.png'
import slider1 from '../assets/images/slider1.png'
import bag from '../assets/images/bag.jpeg'
import food2 from '../assets/images/food2.jpeg'
import ladyEating from '../assets/images/ladyEating.jpeg'


const Data = [
  {
    id: 7,
    food: "Food",
    health: " Health",
    nature: 'Nature',
    header: "The mind and body are not separate. what affects one, affects the other",
    details: "His recital put the Captain into an ecstasy; he went from the lady to the gentleman, and from the gentleman to the lady, to enjoy alternately the sight of their distress. He really shouted with pleasure; and, shaking Monsieur Du Bois strenuously by the hand",
    date: "Mar 28, 2022",
    time: "3 min read",
    image: `${slider2}`
  },
  {
    id: 6,
    location: 'page',
    image: `${bag}`,
    life: 'Inspiration',
    travel: 'Travel',
    header: 'Bangladesh has developed plastic alternative using jute',
    details: "Dr. Johnson, as usual, spoke contemptuously of Colley Cibber. 'It is wonderful that a man, who for forty years had lived with the great and the witty, should have acquired so ill the talents of",
    date: 'June 18, 2023',
    time: '3 min read'
  },

  {
    id: 5,
    health: 'Health',
    life: 'Lifestyle',
    header: "All the money in the world can't buy you back good health",
    details: "My dear, it never rains but it pours. How true the old proverbs are. Here am I, who shall be twenty in September, and yet I never had a proposal till to-day, not a real proposal, and to-day I have had three. Just fancy! THREE proposals in one day! Isn't",
    date: " Oct 9, 2021",
    time: "3 min read",
    image: `${slider5}`
  },
  {
      id: 3,
      image: `${ladyEating}`,
      food: 'Food',
      header: "I like better than talking about food is eating",
      details: "In one point he was more fortunate than the novel's fantastic hero. He never knew--never, indeed, had any cause to know--that somewhat grotesque dread of mirrors, and polished metal",
      date: 'March 10, 2022',
      time: '2 min read'
  },
   {
      id: 4,
      life: "Lifestyle",
      inspire: 'Inspiration',
      header: "Self-observation is the first step of inner unfolding",
      details: "Mr. Branghton's house is small and inconvenient; though his shop, which takes in all the ground floor, is large and commodious. I believe I told you before, that he is a silver-smith.",
      date: "May 2, 2022",
      time: "5 min read",
      image: `${slider4}`
  },
  {
    id: 1,
    tech: "Technology",
    nature: "Nature",
    health: "Health",
    header: "New tech innovation for low cost ocean cleanup",
    details: "Nearly a year later, in the month of October, London was startled by a crime of singular ferocity and rendered all the more notable by the high position of the victim. The details were few and startling. A maid servant living alone in a house not far from the river.",
    date: "Dec 14, 2021",
    time: "2 min read",
    image: `${slider1}`
},
{
    id: 2,
    location: 'page',
    image: `${food2}`,
    titleOne: 'Food',
    header: 'I do not stick to rules when cooking. I rely on my imagination',
    details: "I walked down to the station with them, and then wandered through the streets of the little town, finally returning to the hotel, where I lay upon the sofa and tried to interest myself in a yellow-",
    date: 'June 12, 2023',
    time: '4 min read'
}  
]

export const PageDetails = () => {
  const [visible, setVisible] = useState(4)
  
  const ShowMore = ()=>{
    setVisible((prev) => prev + 4)
  }

  const truncateString = (str, num) => { 
    if (str?.length > num) {
        return str.slice(0, num)+'...'
    } else {
        return str
    }
  };

  return (
    <div className=' relative lg:mx-10 md:mx-5 mx-3 max-w-[1400px] min-h-[100vh] md:flex justify-around my-10'>
      <div className='md:w-2/3  overflow-y-scroll scroll-smooth no-scrollbar'>
        {
          Data.slice(0, visible).map((item) => (
            <Link to={`/blog/${item.id}`}  element={<Blog/>} key={item.id}>
              <div className='h-96 w-full flex flex-col mb-10 items-center rounded-xl shadow-inner bg-white'>
                {/* image */}
                <div className='image relative h-1/2 w-full md:w-4/5 flex justify-center '>
                  <img src={item.image} alt="image" className='rounded-3xl object-cover w-full h-full p-2'/>
                </div>
                {/* details */}
                <div className='details p-1 sm:h-2/3 h-full md:w-4/5 flex-col flex justify-center '>
                <div className='flex flex-wrap'>
                  {item.food? (
                      <span className='bg-stone-200 rounded-full m-2 p-2 px-3 capitalize relative flex justify-center items-center'>
                      <span className='bg-[#B43ADF] rounded-full mr-1 w-2 h-2 flex justify-center items-center  '></span>
                        {item.food}
                      </span>) 
                      : 
                      null
                    }
                    {item.health? (
                      <span className='bg-stone-200 rounded-full m-2 p-2 px-3 capitalize relative flex justify-center items-center'>
                      <span className='bg-[#1DBF2F] rounded-full mr-1 w-2 h-2 flex justify-center items-center  '></span>
                        {item.health}
                      </span>) 
                      : 
                      null
                    }
                    {item.inspire? (
                      <span className='bg-stone-200 rounded-full m-2 p-2 px-3 capitalize relative flex justify-center items-center'>
                      <span className='bg-[#D4BAF6] rounded-full mr-1 w-2 h-2 flex justify-center items-center  '></span>
                        {item.inspire}
                      </span>) 
                      : 
                      null
                    }
                    {item.life? (
                      <span className='bg-stone-200 rounded-full m-2 p-2 px-3 capitalize relative flex justify-center items-center'>
                      <span className='bg-[#4D61FF] rounded-full mr-1 w-2 h-2 flex justify-center items-center  '></span>
                        {item.life}
                      </span>) 
                      : 
                      null
                    }
                    {item.nature? (
                      <span className='bg-stone-200 rounded-full m-2 p-2 px-3 capitalize relative flex justify-center items-center'>
                      <span className='bg-[#FD94FF] rounded-full mr-1 w-2 h-2 flex justify-center items-center  '></span>
                        {item.nature}
                      </span>) 
                      : 
                      null
                    }
                    {item.tech? (
                      <span className='bg-stone-200 rounded-full m-2 p-2 px-3 capitalize relative flex justify-center items-center'>
                      <span className='bg-[#F18509] rounded-full mr-1 w-2 h-2 flex justify-center items-center  '></span>
                        {item.tech}
                      </span>) 
                      : 
                      null
                    }
                    {item.travel? (
                      <span className='bg-stone-200 rounded-full m-2 p-2 px-3 capitalize relative flex justify-center items-center'>
                      <span className='bg-[#E10689] rounded-full mr-1 w-2 h-2 flex justify-center items-center  '></span>
                        {item.travel}
                      </span>) 
                      : 
                      null
                    }
                  </div>
                  <p className=' px-2'><a className='lg:text-2xl hover:cursor-pointer px-1 font-bold hover:underline decoration-[#EC094D] decoration-2 underline-offset-4'>{item.header}</a></p>
                  <p className='md:tracking-wide p-2 text-sm md:text-normal text-stone-600 detail '>{truncateString(item?.details, 90)}</p>
                  <p className="font-bold text-stone-500 text-xs flex  justify-start">
                    <span className="pl-2 px-4 flex items-center"><BsCalendarDate className="m-1"/>{item?.date}</span>
                    <span className="px-4 flex  items-center "><TfiTime className="m-1"/>{item?.time}</span>
                  </p>
                </div>
              </div>
            </Link>
          ))
        }
        <div className='my-10 md:my-1 m-auto flex justify-center items-center p-2'>
          {Data.length %12 && <button onClick={ShowMore} className='bg-[#EC094D] text-stone-100 p-3 px-10 rounded-full hover:bg-[#de7e9a] font-bold hover:scale-95 ease-in shadow-inner duration-200'>Load More</button>}
        </div>
      </div>
      {/* Sidebar */}
      <Aside/>
    </div>
  )
}

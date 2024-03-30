import React from 'react'
import PageData from '../Components/PageData'
import {BsClockHistory} from 'react-icons/bs'
import {FaTwitter, FaFacebookF,FaInstagram,FaLinkedinIn,FaGithub} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Blog } from './Blog'
import drones from '../assets/images/drones.jpeg'
import forestTree from '../assets/images/forestTree.jpeg'
import inspiration from '../assets/images/inspiration.jpeg'
import slider5 from '../assets/images/slider5.png'
import mountain from '../assets/images/mountain.jpeg'
import animal from '../assets/images/animal.jpeg'

const data = [
  {
    id: 8,
    type: "featured",
    image: `${drones}`,
    tech: 'Technology',
    header: 'Amphibious drone are being used to send medicine to flooded area',
    details: "Another tragedy. Had single watch to-night, as crew too tired to double. When morning watch came on deck could find no one except steersman. Raised outcry, and all came on deck. Thorough",
    date: 'May 28, 2022',
    time: '4 min read'
},
{
    id: 9,
    type: "featured",
    image: `${forestTree}`,
    header: 'In all things of nature there is something of the marvelous',
    details: "Though thus elevated into fame, and conscious of uncommon powers, he had not that bustling confidence, or, I may rather say, that animated ambition, which one might have supposed would...",
    date: 'May 20, 2022',
    time: '3 min read'
},
{
  id: 10,
  type: "featured",
  image: `${inspiration}`,
  inspire: 'Inspiration',
  header: 'It is during our darkest moments that we must focus to see the light',
  details: 'Before long the searchlight discovered some distance away a schooner with all sails set, apparently the same vessel which had been noticed earlier in the evening. The wind had by this time',
  date: 'July 19, 2023',
  time: '4 min read',
  name: 'Surabhi Gupta'
},

{
  id: 11,
  type: "latest",
  image: `${animal}`,
  travel: 'Travel',
  header: "Don't listen to what they say, go see",
  details: "They got up and put on their coats, sipping their coffee standing. The painter was silent and preoccupied. There was a gloom over him. He could not bear this marriage, and yet it seemed to him to",
  date: 'May 19, 2022',
  time: '4 min read'
},

{
  id: 12,
  type: "latest",
  image: `${mountain}`,
  nature: 'Nature',
  header: "With age, comes wisdom. With travel, comes understanding",
  details: "It was a cold morning of the early spring, and we sat after breakfast on either side of a cheery fire in the old room at Baker Street. A thick fog rolled down between the lines of dun-coloured",
  date: 'April 01, 2022',
  time: '4 min read'
},
{
  id: 13,
  type: 'latest',
  health: 'Health',
  header: "All the money in the world can't buy you back good health",
  details: "My dear, it never rains but it pours. How true the old proverbs are. Here am I, who shall be twenty in September, and yet I never had a proposal till to-day, not a real proposal, and to-day I have had three. Just fancy! THREE proposals in one day! Isn't",
  date: " Oct 9, 2021",
  time: "3 min read",
  image: `${slider5}`,
},
{
  food: 'Food'
},
{
  life: 'Lifestyle'
}

]

export const Aside = () => {

  // let blog = data.filter((data)=> data.idx)
  // // blog = blog[1]
  // console.log(blog)
  return (
    <div className='flex flex-col lg:ml-10 md:ml-5 md:w-1/3 h-full mx-auto py-3 rounded-xl border bg-stone-100 '>
      {/* featured Posts */}
      <div className='m-5'>
        <h1 className='font-bold p-5 text-lg'>Featured Posts</h1>
        {
          data?.filter(item => item.type === 'featured').map((item)=> (
            <Link to={`/blog/${item.id}`} key={item.id} element={<Blog/>} className='mb-10 sm:mx-auto ' >
              <div  className='ease-in bg-white duration-500 hover:scale-95 relative flex h-20 overflow-hidden my-5 rounded-xl'>
                <div className='w-1/4'>
                  <img src={item.image} alt="image " className='w-full h-full object-cover '/>
                </div>
                <div className='border pl-2 w-full h-full flex flex-col items-start justify-around'>
                  <h2 className='text-stone-600 text-sm font-bold hover:underline decoration-[#EC094D] decoration-2 underline-offset-4 line-clamp-2 md:line-clamp-none'>{item.header}</h2>
                  <p className='flex justify-start items-center font-bold text-sm '><BsClockHistory className='mx-1' />{item.time}</p>
                </div>
              </div>
            </Link>
          ))
        }
      </div>
      {/* Tags */}
      <div className='m-5'>
        <h1 className='font-bold p-2 text-lg'>Tags</h1>
        <div className='flex flex-wrap'>
          {
            data?.map((tag)=>{
              return(
                <div key={tag.idx} >
                  <div className='py-2 text-stone-600 hover:scale-105 duration-500 ease-in '>
                  <div className='flex flex-wrap'>
                        {tag.food? (
                            <span className='bg-stone-200 rounded-full mx-1 p-2 px-3 capitalize relative flex justify-center items-center'>
                            <span className='bg-[#B43ADF] rounded-full mr-1 w-2 h-2 flex justify-center items-center  '></span>
                            {tag.food}
                            </span>) 
                            : 
                            null
                        }
                        {tag.health? (
                            <span className='bg-stone-200 rounded-full mx-1 p-2 px-3 capitalize relative flex justify-center items-center'>
                            <span className='bg-[#1DBF2F] rounded-full mr-1 w-2 h-2 flex justify-center items-center  '></span>
                            {tag.health}
                            </span>) 
                            : 
                            null
                        }
                        {tag.inspire? (
                            <span className='bg-stone-200 rounded-full mx-1 p-2 px-3 capitalize relative flex justify-center items-center'>
                            <span className='bg-[#c9afeb] rounded-full mr-1 w-2 h-2 flex justify-center items-center  '></span>
                            {tag.inspire}
                            </span>) 
                            : 
                            null
                        }
                        {tag.life? (
                            <span className='bg-stone-200 rounded-full mx-1 p-2 px-3 capitalize relative flex justify-center items-center'>
                            <span className='bg-[#4D61FF] rounded-full mr-1 w-2 h-2 flex justify-center items-center  '></span>
                            {tag.life}
                            </span>) 
                            : 
                            null
                        }
                        {tag.nature? (
                            <span className='bg-stone-200 rounded-full mx-1 p-2 px-3 capitalize relative flex justify-center items-center'>
                            <span className='bg-[#FD94FF] rounded-full mr-1 w-2 h-2 flex justify-center items-center  '></span>
                            {tag.nature}
                            </span>) 
                            : 
                            null
                        }
                        {tag.tech? (
                            <span className='bg-stone-200 rounded-full mx-1 p-2 px-3 capitalize relative flex justify-center items-center'>
                            <span className='bg-[#F18509] rounded-full mr-1 w-2 h-2 flex justify-center items-center  '></span>
                            {tag.tech}
                            </span>) 
                            : 
                            null
                        }
                        {tag.travel? (
                            <span className='bg-stone-200 rounded-full mx-1 p-2 px-3 capitalize relative flex justify-center items-center'>
                            <span className='bg-[#E10689] rounded-full mr-1 w-2 h-2 flex justify-center items-center  '></span>
                            {tag.travel}
                            </span>) 
                            : 
                            null
                        }
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      {/* Latest Posts */}
      <div className='m-5'>
        <h1 className='font-bold p-5 text-lg'>Latest Posts</h1>
        {
          data.filter((item)=> item.type === 'latest').map((item)=> (
            <Link to={`/blog/${item.id}`} key={item.id} element={<Blog/>} className='mb-10 sm:mx-auto ' >
              <div  className='ease-in bg-white duration-500 hover:scale-95 relative flex h-20 overflow-hidden my-5 rounded-xl'>
                <div className='w-1/4'>
                  <img src={item.image} alt="image " className='w-full h-full object-cover '/>
                </div>
                <div className='border pl-2 w-full h-full flex flex-col items-start justify-around'>
                  <h2 className='text-stone-600 text-sm font-bold hover:underline decoration-[#EC094D] decoration-2 underline-offset-4 line-clamp-2 md:line-clamp-none'>{item.header}</h2>
                  <p className='flex justify-start items-center font-bold text-sm '><BsClockHistory className='mx-1' />{item.time}</p>
                </div>
              </div>
            </Link>
          ))
        }
      </div>
      {/* NewsLetter */}
      <div className='bg-[#EC094D]  rounded-lg m-5 my-10 py-5'>
        <div className='text-center text-stone-100 mx-5'>
          <h1 className='font-extrabold text-2xl p-3'>News Letter</h1>
          <p className='p-2'>Get the latest posts delivered straight to your inbox.</p>
        </div>
        <form action="" method="post" className='items-center flex flex-col justify-center m-5 '>
          <div className='my-3 w-full h-10'>
            <input type="text" name="name" id="" className=' outline-none px-4 w-full h-full rounded-full p-2' placeholder='Your Name ' />
          </div>
          <div className='my-3 w-full h-10'>
            <input type="email" name="" id="" className=' outline-none px-4 w-full h-full rounded-full p-2' placeholder='Your Email ' />
          </div>
          <div className='my-3 w-full h-10 bg-stone-100 hover:bg-[#de7e9a] text-stone-700 hover:text-stone-200 duration-200  flex justify-center items-center font-bold rounded-full'>
            <button type="submit" className=' outline-none '>Subscribe</button>
          </div>
        </form>
      </div>
      {/* follow us  */}
      <div className=''>
          <h1 className='font-bold p-2 text-lg m-3'>Follow Us</h1>
          <div className='flex flex-wrap p-2'>
              <p className='bg-stone-200/30 m-2 hover:scale-110 ease-in duration-100 rounded-full p-2'>
                <FaTwitter className=' text-blue-400 ' size={20}/>
              </p>
              <p className='bg-stone-200/30 m-2 hover:scale-110 ease-in duration-100 rounded-full p-2'>
                <FaFacebookF className=' text-blue-800' size={20}/>
              </p>
              <p className='bg-stone-200/30 m-2 hover:scale-110 ease-in duration-100 rounded-full p-2'>
                <FaInstagram className=' text-red-600' size={20}/>
              </p>
              <p className='bg-stone-200/30 m-2 hover:scale-110 ease-in duration-100 rounded-full p-2'>
                <FaLinkedinIn className=' text-blue-900' size={20}/>
              </p>
              <p className='bg-stone-200/30 m-2 hover:scale-110 ease-in duration-100 rounded-full p-2'>
                <FaGithub className=' text-black' size={20}/>
              </p>
          </div>
      </div>
    </div>
  )
}

export default data;
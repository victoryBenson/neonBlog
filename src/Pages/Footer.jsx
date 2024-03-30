import React from 'react'
import {FaTwitter, FaFacebookF,FaInstagram,FaLinkedinIn,FaGithub} from 'react-icons/fa'
import {WiDirectionUp} from 'react-icons/wi'
import data from './Aside'
import {BsClockHistory} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { Blog } from './Blog'

export const Footer = () => {
    
    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      };
  return (
    <div className='bg-stone-200/30'>
        <div className='grid md:grid-cols-3 grid-cols-1 p-3 gap-8'>
            {/* News letter */}
            <div>
                <h1 className='font-bold p-2 text-lg'>New Letter</h1>
                <p className='p-3 py-5'>Get the latest posts delivered straight to your inbox.</p>
                <form action="" method="post" className='border h-12 flex justify-between items-center rounded-full '>
                    <input type="email" name="" placeholder='Your email address' className='outline-none w-full h-full rounded-l-full p-3' />
                    <button type="submit" className='p-2 bg-[#EC094D] rounded-r-full font-bold text-stone-100 h-full hover:scale-95 ease-in duration-100'>Subscribe</button>
                </form>
                {/* follow us  */}
                <div className=''>
                    <h1 className='font-bold pt-10 text-lg'>Follow Us</h1>
                    <div className='flex flex-wrap p-2'>
                        <p className='bg-stone-200/30 m-2 hover:scale-110 ease-in duration-100 rounded-full p-2'><FaTwitter className=' text-blue-400 ' size={20}/></p>
                        <p className='bg-stone-200/30 m-2 hover:scale-110 ease-in duration-100 rounded-full p-2'><FaFacebookF className=' text-blue-800' size={20}/></p>
                        <p className='bg-stone-200/30 m-2 hover:scale-110 ease-in duration-100 rounded-full p-2'><FaInstagram className=' text-red-600' size={20}/></p>
                        <p className='bg-stone-200/30 m-2 hover:scale-110 ease-in duration-100 rounded-full p-2'><FaLinkedinIn className=' text-blue-900' size={20}/></p>
                        <p className='bg-stone-200/30 m-2 hover:scale-110 ease-in duration-100 rounded-full p-2'><FaGithub className=' text-black' size={20}/></p>
                    </div>
                </div>
            </div>
            {/* Latest Posts */}
            <div className=''>
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
            {/* Tags */}
            <div className=''>
                <h1 className='font-bold text-lg p-5'>Tags</h1>
                <div className='flex flex-wrap'>
                {
                    data?.map((item)=>{
                    return(
                        <div key={item.idx} >
                            <div className='py-2 text-stone-600 hover:scale-105 duration-500 ease-in '>
                                <div className='flex flex-wrap'>
                                    {item.food? (
                                        <span className='bg-stone-200 rounded-full mx-1 p-2 px-3 capitalize relative flex justify-center items-center'>
                                        <span className='bg-[#B43ADF] rounded-full mr-1 w-2 h-2 flex justify-center items-center  '></span>
                                        {item.food}
                                        </span>) 
                                        : 
                                        null
                                    }
                                    {item.health? (
                                        <span className='bg-stone-200 rounded-full mx-1 p-2 px-3 capitalize relative flex justify-center items-center'>
                                        <span className='bg-[#1DBF2F] rounded-full mr-1 w-2 h-2 flex justify-center items-center  '></span>
                                        {item.health}
                                        </span>) 
                                        : 
                                        null
                                    }
                                    {item.inspire? (
                                        <span className='bg-stone-200 rounded-full mx-1 p-2 px-3 capitalize relative flex justify-center items-center'>
                                        <span className='bg-[#D4BAF6] rounded-full mr-1 w-2 h-2 flex justify-center items-center  '></span>
                                        {item.inspire}
                                        </span>) 
                                        : 
                                        null
                                    }
                                    {item.life? (
                                        <span className='bg-stone-200 rounded-full mx-1 p-2 px-3 capitalize relative flex justify-center items-center'>
                                        <span className='bg-[#4D61FF] rounded-full mr-1 w-2 h-2 flex justify-center items-center  '></span>
                                        {item.life}
                                        </span>) 
                                        : 
                                        null
                                    }
                                    {item.nature? (
                                        <span className='bg-stone-200 rounded-full mx-1 p-2 px-3 capitalize relative flex justify-center items-center'>
                                        <span className='bg-[#FD94FF] rounded-full mr-1 w-2 h-2 flex justify-center items-center  '></span>
                                        {item.nature}
                                        </span>) 
                                        : 
                                        null
                                    }
                                    {item.tech? (
                                        <span className='bg-stone-200 rounded-full mx-1 p-2 px-3 capitalize relative flex justify-center items-center'>
                                        <span className='bg-[#F18509] rounded-full mr-1 w-2 h-2 flex justify-center items-center  '></span>
                                        {item.tech}
                                        </span>) 
                                        : 
                                        null
                                    }
                                    {item.travel? (
                                        <span className='bg-stone-200 rounded-full mx-1 p-2 px-3 capitalize relative flex justify-center items-center'>
                                        <span className='bg-[#E10689] rounded-full mr-1 w-2 h-2 flex justify-center items-center  '></span>
                                        {item.travel}
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
        </div>
        {/* last div */}
        <div className='flex flex-wrap justify-between items-center p-3 py-5'>
            <div className='p-2' >© 2023 Neon - All right Reserved. Proudly Published with Ghost</div>
            <div onClick={scrollToTop} className='flex justify-center items-center p-2 cursor-pointer '>
                <WiDirectionUp/>    
                <span>Back top top </span>   
            </div>
        </div>
    </div>
  )
}


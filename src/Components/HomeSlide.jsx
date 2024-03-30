import React, { useState, useEffect,useRef} from "react";
import SliderData from "./HomeSlideData";
import {BsCalendarDate} from 'react-icons/bs'
import {TfiTime} from 'react-icons/tfi'
import { Blog } from "../Pages/Blog";
import { Link } from "react-router-dom";

const delay = 5000;
export const HomeSlide = () => {
  const [index,setIndex] = useState(0)

  const timeoutRef = useRef(null);

  const resetTimeout = ()=> {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() =>
        setIndex((prevIndex) =>
          prevIndex === SliderData.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);
 

  return (
    <div className=" relative overflow-hidden slideshow ">
      <div  style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }} className=" flex inner group h-full w-full relative">
        {
          SliderData.map((item) => {
            return (
              <Link key={item.id} to = {`/blog/${item.id}`} element={<Blog/>} className="slide w-full displayItems group-hover:cursor-pointer flex-shrink-0 flex ">
                {/* leftSide */}
                <div className=" w-full h-80 whitespace-normal flex flex-col justify-evenly items-start">
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
                  <h1 className="lg:text-4xl text-2xl hover:cursor-pointer px-3 font-bold hover:underline decoration-[#EC094D] decoration-2 underline-offset-4">{item.header}</h1>
                  <h3 className="tracking-wide p-3 h-20 md:h-auto text-stone-600 detail font-normal line-clamp-3 md:line-clamp-none overflow-hidden">{item.details}</h3>
                  <p className=" text-stone-500 text-sm flex flex-wrap">
                    <span className="p-2 pl-2 px-4 flex justify-center items-center"><BsCalendarDate className="m-1"/>{item.date}</span>
                    <span className="p-2 px-4 flex justify-center items-center"><TfiTime className="m-1"/>{item.time}</span>
                  </p>
                </div> 
                {/* picture Display */}
                <div className="hidden md:flex items-center justify-center p-3 sm:flex w-full h-80 order-first md:order-2 ">
                  {/* <div className="p-2 bg-stone-50"> */}
                    <img src={item?.image} alt="slider" className="w-full h-full rounded-[2rem] object-cover" />
                  {/* </div> */}
                </div>
              </Link>
            )
          })
        }
      </div>
      <div className="slideshowDots text-center py-10">
        {SliderData.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? ` active` : ""} rounded-full h-[10px] w-[10px] inline-block cursor-pointer bg-[#c4c4c4]`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}


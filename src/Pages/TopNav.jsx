import React, {useEffect, useState} from 'react'
import LOGO from '../assets/images/logo.png'
import { NavLink, Link } from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import {LiaMoonSolid} from 'react-icons/lia'
import {HiMiniBars3BottomRight} from 'react-icons/hi2'
import {MdKeyboardArrowDown} from 'react-icons/md'
import {LiaTimesSolid} from 'react-icons/lia'
import { FaTwitter, FaLinkedinIn, FaFacebookF, FaGithub, FaInstagram } from 'react-icons/fa'
import authorData  from './Author'
import { SearchResult } from '../Components/SearchResult'
import useLocalStorage from 'use-local-storage'
import { HomePage } from './HomePage'
import {PiNotePencilThin,PiPencilLineLight} from 'react-icons/pi'



export const TopNav = () => {
    const [mobile, setMobile] = useState(false)
    const [open, setOpen ] = useState(false);
    const [searchToggle, setSearchToggle] = useState(false)
    const [search, setSearch] = useState('')
    
    const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')
    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
        console.log(newTheme)
    }
    useEffect(()=>{
        const body = document.querySelector('body');
        body.style.overflow = mobile? 'scroll' : 'auto';
        body.style.overflow = searchToggle? 'hidden' : 'auto';
    }, [mobile,searchToggle]);
    
    
  return (
    <div  className='relative ' >
        {/* topView */}
        <div className='mx-5 z-[999] px-3 bg-stone-100 h-20 md:my-20 my-5 border flex flex-shrink items-center lg:justify-around justify-between shadow-lg rounded-lg '>
            <Link to = "/" >
                <img src={LOGO} alt="logo" className='hover:scale-105 duration-500 ease-in-out'/>
            </Link>
            <div className='hidden lg:flex justify-center items-center ' >
                <NavLink 
                    to = '/features' 
                    style={
                        ({isActive}) => {
                        return {color: isActive? '#EC094D' : 'black'}
                    }}
                    className ="p-2 hover:underline decoration-[#EC094D] decoration-2 underline-offset-4">
                    Features
                </NavLink>
                <NavLink 
                    to = '/styleGuide' 
                    style={
                        ({isActive}) => {
                        return {color: isActive? '#EC094D' : 'black'}
                    }}
                    className ="p-2 hover:underline decoration-[#EC094D] decoration-2 underline-offset-4">
                    Style Guide
                </NavLink>
                <NavLink 
                    to = '/tags' 
                    style={
                        ({isActive}) => {
                        return {color: isActive? '#EC094D' : 'black'}
                    }}
                    className ="p-2 hover:underline decoration-[#EC094D] decoration-2 underline-offset-4">
                    Tags
                </NavLink>
                <NavLink 
                    to = '/author' 
                    style={
                        ({isActive}) => {
                        return {color: isActive? '#EC094D' : 'black'}
                    }}
                    className ="p-2 hover:underline  decoration-[#EC094D] decoration-2 underline-offset-4">
                    Authors
                </NavLink>
                <NavLink
                    to = '/write' 
                    style={
                        ({isActive}) => {
                        return {color: isActive? '#EC094D' : 'black'}
                    }}
                    className ="flex items-center p-2 hover:underline decoration-[#EC094D] decoration-2 underline-offset-4">
                    <span className='mt-1'><PiPencilLineLight /></span>
                    Create a content
                </NavLink>
                <div className="relative" onMouseLeave={() => setOpen(false)} >
                    <button 
                        className='p-2 items-center flex justify-center hover:underline decoration-[#EC094D] decoration-2 underline-offset-4'
                        onMouseOver={()=> setOpen(true)}>
                            <span>More </span>
                            <MdKeyboardArrowDown size={20}/>
                    </button>
                    { open? (
                        <ul className={`z-[99] absolute right-0 left-0 top-10 flex flex-col justify-center w-52 py-2 mt-2 rounded-lg shadow-xl border bg-stone-50`}>
                            <NavLink to = '/' element={<HomePage/>} onClick={()=> setOpen(false)} className= "hover:underline decoration-[#EC094D] decoration-2 underline-offset-4" >
                                <li className='flex items-center px-3 py-2 text-sm hover:bg-stone-100 m-1 rounded-lg'>Home post vertical</li>
                            </NavLink>
                            <NavLink to = '/' element={<HomePage/>} onClick={()=> setOpen(false)} className= "hover:underline decoration-[#EC094D] decoration-2 underline-offset-4" >
                                <li className='flex items-center px-3 py-2 text-sm hover:bg-stone-100 m-1 rounded-lg'>Home post masonry</li>
                            </NavLink>
                            <NavLink to = '/' element={<HomePage/>} onClick={()=> setOpen(false)} className= "hover:underline decoration-[#EC094D] decoration-2 underline-offset-4" >
                                <li className='flex items-center px-3 py-2 text-sm hover:bg-stone-100 m-1 rounded-lg'>Post fullwidth</li>
                            </NavLink>
                            <NavLink to = '/' element={<HomePage/>} onClick={()=> setOpen(false)} className= "hover:underline decoration-[#EC094D] decoration-2 underline-offset-4" >
                                <li className='flex items-center px-3 py-2 text-sm hover:bg-stone-100 m-1 rounded-lg'>Post no sidebar</li>
                            </NavLink>
                            <NavLink to = '/' element={<HomePage/>} onClick={()=> setOpen(false)} className= "hover:underline decoration-[#EC094D] decoration-2 underline-offset-4" >
                                <li className='flex items-center px-3 py-2 text-sm hover:bg-stone-100 m-1 rounded-lg'>Post cover auto height</li>
                            </NavLink>
                            <NavLink to = '/' element={<HomePage/>} onClick={()=> setOpen(false)} className= "hover:underline decoration-[#EC094D] decoration-2 underline-offset-4" >
                                <li className='flex items-center px-3 py-2 text-sm hover:bg-stone-100 m-1 rounded-lg'>Post with TOC</li>
                            </NavLink>
                            <NavLink to = '/' element={<HomePage/>} onClick={()=> setOpen(false)} className= "hover:underline decoration-[#EC094D] decoration-2 underline-offset-4" >
                                <li className='flex items-center px-3 py-2 text-sm hover:bg-stone-100 m-1 rounded-lg'>Tag style two</li>
                            </NavLink>
                            <NavLink to = '/' element={<HomePage/>} onClick={()=> setOpen(false)} className= "hover:underline decoration-[#EC094D] decoration-2 underline-offset-4" >
                                <li className='flex items-center px-3 py-2 text-sm hover:bg-stone-100 m-1 rounded-lg'>Authur style two</li>
                            </NavLink>
                            <NavLink to = '/' element={<HomePage/>} onClick={()=> setOpen(false)} className= "hover:underline decoration-[#EC094D] decoration-2 underline-offset-4" >
                                <li className='flex items-center px-3 py-2 text-sm hover:bg-stone-100 m-1 rounded-lg'>Author style three</li>
                            </NavLink>
                            <NavLink to = '/' element={<HomePage/>} onClick={()=> setOpen(false)} className= "hover:underline decoration-[#EC094D] decoration-2 underline-offset-4" >
                                <li className='flex items-center px-3 py-2 text-sm hover:bg-stone-100 m-1 rounded-lg'>Yearly archive</li>
                            </NavLink>
                            <NavLink to = '/' element={<HomePage/>} onClick={()=> setOpen(false)} className= "hover:underline decoration-[#EC094D] decoration-2 underline-offset-4" >
                                <li className='flex items-center px-3 py-2 text-sm hover:bg-stone-100 m-1 rounded-lg'>Monthly archive</li>
                            </NavLink>
                            <NavLink to = '/' element={<HomePage/>} onClick={()=> setOpen(false)} className= "hover:underline decoration-[#EC094D] decoration-2 underline-offset-4" >
                                <li className='flex items-center px-3 py-2 text-sm hover:bg-stone-100 m-1 rounded-lg'>Contact</li>
                            </NavLink>
                            <NavLink to = '/' element={<HomePage/>} onClick={()=> setOpen(false)} className= "hover:underline decoration-[#EC094D] decoration-2 underline-offset-4" >
                                <li className='flex items-center px-3 py-2 text-sm hover:bg-stone-100 m-1 rounded-lg'>Documentation</li>
                            </NavLink>
                        </ul>
                        )
                        :
                        null
                    }
                </div>
                {/* Search Icon */}
                <div className=''>
                    <button className='p-3 hover:text-[#EC094D]'>
                        <AiOutlineSearch size={20} className='hover:underline' onClick={()=>setSearchToggle(true)} />
                    </button>
                    {
                        searchToggle? (
                            <div id='mySearch' className=' absolute top-0 right-0 left-0 h-full w-full flex mx-auto justify-center items-center' >
                                <div className='w-full h-full fixed left-0 right-0  bg-black/60 z-40' onClick={()=>setSearchToggle(!searchToggle)}></div>
                                <div className='z-[40] absolute top-28 w-2/3 flex flex-col justify-center items-center h-auto '>
                                    <div className='bg-white h-16 rounded-full p-2 px-3 flex items-center w-full mb-2'>
                                        <AiOutlineSearch size={20} className=''/>
                                        <input 
                                            onChange={(e)=> setSearch(e.target.value)}
                                            type="search" name="search-btn" id=""
                                            autoFocus
                                            placeholder={`Search posts,tags and authors..`} 
                                            className='ml-3 w-full h-full outline-none'
                                        />
                                    </div>
                                    <div className={ search ? 'searchResult w-2/3 bg-white rounded z-40 p-5 m-1' : <p>no match found</p> } >
                                        {
                                            authorData.filter((item)=> {
                                                return search.toLowerCase() === ''
                                                ? null
                                                : item.name.toLowerCase().includes(search)
                                            }).map((item)=>{
                                                return (
                                                    <div className='p-2'>
                                                        <SearchResult  key={item.details} item={item} />
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                        :
                        null 
                    }
                </div>
                {/* toggleDarkMode */}
                <button onClick={switchTheme}  className='p-2'><LiaMoonSolid size={20}/></button>
                {/* signIn */}
                <Link to = 'signin'>
                    <button className ="p-2 hover:underline font-bold  decoration-[#EC094D] decoration-2 underline-offset-4">
                        Sign In
                    </button>
                </Link>
                {/* becomeMember */}
                <Link to = 'membership'>
                    <button 
                        className='p-2 bg-[#EC094D] text-stone-100 font-bold rounded-full hover:scale-95 ease-out duration-500'>
                        Become member
                    </button>
                </Link>
            </div>
            
                 {/*mobile view */}
            <div className='flex flex-cols lg:hidden'>
                <span onClick={()=> setMobile(!mobile)} className='duration-300'>
                    {mobile?<LiaTimesSolid size={30} /> : <HiMiniBars3BottomRight size={30} />}
                </span>
            </div>

        </div>
        {/* mobile DropDown */}
        {
            mobile? (
                <div>
                    <div onClick={()=> setMobile(!mobile)} className='bg-black/60 fixed w-full h-full left-0 right-0 top-0 z-20'></div>
                    <div onMouseLeave={()=> setMobile(!mobile)} className=' duration-300 ease-in transition-all delay-150 z-[999] absolute sm:right-8 right-4  top-24 md:top-32  sm:w-[70%] w-[80%] py-2 px-5 mt-2 rounded-lg shadow-xl bg-stone-50'>
                        <ul  className={`flex flex-col justify-center h-auto overflow-y-scroll scroll-smooth no-scrollbar`}>
                            {/* features */}
                            <NavLink
                                onClick={()=> setMobile(!mobile)}
                                to = '/features' 
                                style={
                                    ({isActive}) => {
                                    return {color: isActive? '#EC094D' : 'black'}
                                }}
                                className ="p-3 hover:underline decoration-[#EC094D] decoration-2 underline-offset-4">
                                Features
                            </NavLink>
                            {/* styleGuide */}
                            <NavLink 
                                onClick={()=> setMobile(!mobile)}
                                to = '/styleGuide' 
                                style={
                                    ({isActive}) => {
                                    return {color: isActive? '#EC094D' : 'black'}
                                }}
                                className ="p-3 hover:underline decoration-[#EC094D] decoration-2 underline-offset-4">
                                Style Guide
                            </NavLink>
                            {/* tags */}
                            <NavLink 
                                onClick={()=> setMobile(!mobile)}
                                to = '/tags' 
                                style={
                                    ({isActive}) => {
                                    return {color: isActive? '#EC094D' : 'black'}
                                }}
                                className ="p-3 hover:underline decoration-[#EC094D] decoration-2 underline-offset-4">
                                Tags
                            </NavLink>
                            {/* Author */}
                            <NavLink
                                onClick={()=> setMobile(!mobile)} 
                                to = '/author' 
                                style={
                                    ({isActive}) => {
                                    return {color: isActive? '#EC094D' : 'black'}
                                }}
                                className ="p-3 hover:underline decoration-[#EC094D] decoration-2 underline-offset-4">
                                Authors
                            </NavLink>
                            <NavLink
                                onClick={()=> setMobile(!mobile)} 
                                to = '/write' 
                                style={
                                    ({isActive}) => {
                                    return {color: isActive? '#EC094D' : 'black'}
                                }}
                                className ="flex items-center p-3 hover:underline decoration-[#EC094D] decoration-2 underline-offset-4">
                                <span className='mt-1'><PiNotePencilThin /></span>
                                Write
                            </NavLink>
                            <div >
                                <button className='p-3'><LiaMoonSolid size={20} onClick={()=> setMobile(!mobile)}/></button>
                                {/* searchIcon */}
                                <button className='p-3 hover:text-[#EC094D]' >
                                    <AiOutlineSearch size={20} className='hover:underline' onClick={()=>setSearchToggle(true)} />
                                </button>
                                {
                                    searchToggle? (
                                        <div id='mySearch' className=' fixed top-0 right-0 left-0 h-full w-full flex mx-auto justify-center items-center' >
                                            <div className='w-full h-full fixed left-0 right-0  bg-black/60' onClick={()=>setSearchToggle(!searchToggle)}></div>
                                            <div className='z-[999] absolute top-28 w-[80%] mx-2 flex justify-start items-center bg-stone-50 md:h-16 h-12 rounded p-2 px-3 '>
                                                <AiOutlineSearch size={20} className=''/>
                                                <input 
                                                type="search" name="search-btn" id=""
                                                autoFocus 
                                                placeholder={`Search posts,tags and authors..`} 
                                                className='ml-3 w-full outline-none '
                                                />
                                            </div>
                                        </div>
                                    )
                                    :
                                    null 
                                }
                            </div>
                            {/* signIn */}
                            <Link to = '/signin' onClick={()=> setMobile(!mobile)}>
                                <button className='p-3 hover:underline decoration-[#EC094D] decoration-2 underline-offset-4'>
                                    Sign In
                                </button>
                            </Link>
                            {/* becomeMember */}
                            <Link to = '/membership' onClick={()=> setMobile(!mobile)}>
                                <button 
                                    className='p-2 px-3 w-full bg-[#EC094D] text-stone-100 font-semibold rounded-full hover:scale-95 ease-out duration-200 transition-all delay-150'>
                                    Become member
                                </button>
                            </Link>
                            {/* follow us  */}
                            <div className='my-2'>
                                <h1 className='font-bold p-2 text-lg m-3'>Follow Us</h1>
                                <div className='flex flex-wrap'>
                                    <p className='bg-stone-200/30 m-1 hover:scale-110 ease-in duration-100 rounded-full p-2'>
                                        <FaTwitter className=' text-blue-400 '/>
                                    </p>
                                    <p className='bg-stone-200/30 m-1 hover:scale-110 ease-in duration-100 rounded-full p-2'>
                                        <FaFacebookF className=' text-blue-800'/>
                                    </p>
                                    <p className='bg-stone-200/30 m-1 hover:scale-110 ease-in duration-100 rounded-full p-2'>
                                        <FaInstagram className=' text-red-600'/>
                                    </p>
                                    <p className='bg-stone-200/30 m-1 hover:scale-110 ease-in duration-100 rounded-full p-2'>
                                        <FaLinkedinIn className=' text-blue-900'/>
                                    </p>
                                    <p className='bg-stone-200/30 m-1 hover:scale-110 ease-in duration-100 rounded-full p-2'>
                                        <FaGithub className=' text-black'/>
                                    </p>
                                </div>
                            </div>  
                        </ul>
                    </div>
                </div>
                )
            :
            null
        }
    </div>
  )
}

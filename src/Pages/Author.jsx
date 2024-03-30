import React, {useState} from 'react'
import {PiToggleRightDuotone} from 'react-icons/pi'
import {PiToggleLeftDuotone} from 'react-icons/pi'
import author1 from '../assets/images/author1.png'
import author2 from '../assets/images/author2.png'
import author3 from '../assets/images/author3.png'
import author4 from '../assets/images/author4.png'
import author5 from '../assets/images/author5.png'
import {FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram,FaGithub} from 'react-icons/fa'

//authorsData
const authorData = [
    {
        image: `${author1}`,
        name: 'Biswajit Saha',
        details: 'Biswajit Saha is a very simple person. He likes to ride a bicycle when free. Prefers tea over coffee. He is currently writing code at gbjsolution.com'
    },
    {
        image: `${author2}`,
        name: 'Ishan Sharma',
        details: 'Ishan is back end developer by profession and writer by passion. He writes science fiction novels and short story mostly for children. He is the always smiling person.'
    },
    {
        image: `${author3}`,
        name: 'Surabhi Gupta',
        details: 'Front end developer by profession. Digital painting enthusiast. She also involved in various social activity. Fan of winter and snow.'
    },
    {
        image: `${author4}`,
        name: 'Harini Banerjee',
        details: 'Harini Banerjee is award winning young blogger and content marketer. She also sings some time. Frequent traveler, cricket fan and technology enthusiast.'
    },
    {
        image: `${author5}`,
        name: 'Apurba Talukdar',
        details: 'Apurba is UI & UX designer by profession, photographer by passion. Solo traveller, blogger, badminton player and movie lover.'
    }
]
export default authorData
export const Author = () => {
    const [toggle, setToggle] = useState(false)
    
    // setToggle btn
    const handleClick = () => {
        setToggle(!toggle)
        toggle?  authorData.reverse() : authorData.sort((a,b) => a.name.localeCompare(b.name))
    }

  return (
    <div className='max-w-[1400px]'>
        <div className='text-center font-bold text-3xl pt mb-16'>
            <h1>Authors</h1>
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
        <div className='grid md:grid-cols-2 grid-cols-1 gap-8 lg:mx-12 mx-5 mb-40'>
            {
                authorData.map((author, id) => (
                    <div className='bg-white rounded-lg'>
                        <div className='flex justify-center p-2 h-48'>
                            <div className='w-1/3 h-full '>
                                <img src={author.image} alt="image" className='w-full h-full object-cover rounded-2xl'/>
                            </div>
                            <div className='w-2/3 p-3'>
                                <p className='font-bold text-stone-700 text-lg p-2'>{author.name}</p>
                                <span className='flex md:backdrop:p-2'>
                                    <FaTwitter className='m-2 text-blue-400 hover:scale-110 ease-in duration-100'/>
                                    <FaFacebookF className='m-2 text-blue-800 hover:scale-110 ease-in duration-100'/>
                                    <FaInstagram className='m-2 text-red-600 hover:scale-110 ease-in duration-100'/>
                                    <FaLinkedinIn className='m-2 text-blue-900 hover:scale-110 ease-in duration-100'/>
                                    <FaGithub className='m-2 text-black hover:scale-110 ease-in duration-100'/>
                                </span>
                                <p className='text-sm line-clamp-3 lg:line-clamp-none'>{author.details}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

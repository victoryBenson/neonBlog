import React, { useState } from 'react'
import {LiaCheckCircle} from 'react-icons/lia'
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md'
import { NavLink } from 'react-router-dom'

const data =[
    {
        id: 1,
        type:"Free",
        monthly: '$0',
        yearly: '$0.0',
        duration: 'forever',
        details: 'Signup to access all the free members-only posts.',
        opt1: 'Access to all free private posts',
        opt2: 'Weekly new content',
        opt3: 'Support independent publishing',
        opt4: 'No card details required',
        submit: 'Subscribe now'
    },
    {
        id: 2,
        type:"Platinum",
        monthly: '$9',
        yearly: '$90',
        duration: '/month',
        details: 'Get entry to our bi-weekly webinar and support us to continue our publishing.',
        opt1: 'Access to all premium paid posts',
        opt2: 'Weekly two new content',
        opt3: 'Support independent publishing',
        opt4: 'Get entry to our bi-weekly webinar',
        submit: 'Subscribe now'
    },
    {
        id: 3,
        type:"Gold",
        monthly: '$4',
        yearly: '$40',
        duration: '/month',
        details: 'Access paid posts and support us to continue our publishing.',
        opt1: 'Access to all paid private posts',
        opt2: 'Weekly new content',
        opt3: 'Support independent publishing',
        opt4: 'Simple, secure card payment',
        submit: 'Subscribe now'
    },
    {
        title: 'What is the Neon subscription model?',
        details: "Pellentesque nec dictum magna, sit amet rutrum tortor. Nullam turpis ante, dictum imperdiet massa non, fermentum fringilla urna. Curabitur viverra consequat condimentum. Nulla sollicitudin eros in congue ultricies.Proin ultrices magna ac nibh imperdiet, faucibus consectetur mauris aliquet. Nam et aliquet justo, nec mollis quam. Mauris commodo mattis elit nec mollis. Vestibulum auctor posuere rhoncus."
    },
    {
        title: 'What is the difference between plans?',
        details: " Nunc luctus, ipsum nec euismod ornare, velit diam mattis mauris, sit amet euismod orci mi et lorem. Donec eu fringilla risus, ut auctor dolor. Maecenas facilisis mattis tortor a eleifend."
    },
    {
        title: "How can I maximize the benefits of my subscription?",
        details: "Duis suscipit ligula nec sollicitudin cursus. Proin eros mi, rutrum vitae luctus sed, sollicitudin nec libero. Phasellus id diam accumsan, faucibus risus sed, vestibulum purus.Fusce nec nunc malesuada, vulputate enim eu, ultrices diam. Quisque dictum fringilla iaculis. Mauris eleifend, neque id sollicitudin tempus, ipsum nunc elementum purus, sit amet interdum nunc turpis non lorem."
    },
    {
        title: "How can I manage my subscription?",
        details: "Sed non libero rhoncus, fermentum odio eu, pulvinar turpis. Proin id tempor ante, at rutrum tellus. Nunc euismod interdum justo, ut tristique justo tincidunt in. Nunc vestibulum cursus viverra."
    },
    {
        title: "How to upgrade/downgrade my subscription plan?",
        details: "Integer tincidunt vel nibh at pellentesque. Maecenas a aliquam tellus. Curabitur at ligula dictum urna venenatis tristique. Aenean sit amet ultrices ante, a ullamcorper nisl. Curabitur hendrerit purus ac est dignissim, vel elementum diam ullamcorper."
    },
    {
        title: "How to renew my existing plan?",
        details: "Integer tincidunt vel nibh at pellentesque. Maecenas a aliquam tellus. Curabitur at ligula dictum urna venenatis tristique. Aenean sit amet ultrices ante, a ullamcorper nisl. Curabitur hendrerit purus ac est dignissim, vel elementum diam ullamcorper."
    },
    {
        title: "What is the cancelation policy?",
        details: "Etiam tincidunt vitae nulla sit amet porttitor. Aenean fringilla erat purus, in varius turpis pellentesque vitae.",
        list1: 'Ut et elit cursus, viverra lorem at, tempor erat.',
        list2: 'Duis maximus id massa in rhoncus.',
        list3: 'Sed aliquam condimentum porta.Integer metus urna, imperdiet in feugiat sit amet, lacinia aliquet mauris.',
        list4: 'Etiam quis tortor augue. Nullam sit amet dignissim arcu.'
    }
]
export const Membership = () => {
    const [yearly, setYearly] =useState(false)
    // FAQs
    const [dropdown, setDropDown] = useState(false)
    const toggle = (id) => {
        setDropDown(dropdown === id? undefined : id)
    }

  return (
    <div>
        <div className='text-center'>
            <h1 className='font-bold text-stone-800 text-4xl p-5'>Membership</h1>
            <p className='p-5 text-lg'>Choose your subscription and unlock full access and see the entire collection of members-only content</p>
            <div className='flex items-center  text-center justify-center font-bold p-2'>
                <button onClick={()=> setYearly(false)} className='bg-[#EC094D] text-stone-50 p-3 rounded-l-full'>Monthly</button>
                <button onClick={()=> setYearly(true)} className='bg-stone-50 p-3 rounded-r-full'>Yearly</button>
            </div>
            {/* priceList */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:mx-10 mx-5 gap-8 m-2'>
                {
                    data.filter((item)=> item.id).map((item)=>{
                        return (
                            <div key={item.id} className='border rounded-xl text-stone-700 bg-white shadow-xl '>
                                <div className='text-start border-b-2 p-5 mx-4'>
                                    <h4 className='text-lg py-3 font-bold'>
                                        {item.type}
                                    </h4>
                                    <h1 className='py-3'>
                                        <span className='text-black font-bold text-4xl'>{yearly? item.yearly : item.monthly}</span>
                                        <span>{item.duration}</span>
                                    </h1>
                                    <p className='py-3'>{item.details}</p>
                                </div>
                                <div className='p-5 text-start'>
                                    <p className='flex items-center p-2'><LiaCheckCircle className='mx-2'/>{item.opt1}</p>
                                    <p className='flex items-center p-2'><LiaCheckCircle className='mx-2'/>{item.opt2}</p>
                                    <p className='flex items-center p-2'><LiaCheckCircle className='mx-2'/>{item.opt3}</p>
                                    <p className='flex items-center p-2'><LiaCheckCircle className='mx-2'/>{item.opt4}</p>
                                </div>
                                <div className='m-5 mb-10 hover:scale-95 duration-200 ease-in'>
                                    <button className='bg-[#EC094D] w-full rounded-full font-bold text-stone-50 p-3'>{item.submit}</button>
                                </div>
                           </div>
                        )
                    })
                }
            </div>
            {/* FAQs */}
            <div className=' bg-white md:mx-40 mx-5 py-4 my-10 rounded shadow-inner'>
                <h1 className='font-bold text-3xl text-start p-2 m-10'>FAQs</h1>
                <div>
                    {
                        data.filter((item)=> item.title).map((item)=> {
                            return (
                                <div key={item.title} className='mx-10 mb-4 border rounded' >
                                    <h1  onClick={() => toggle(item.title)}className=' p-2 rounded text-start flex justify-between items-center'>
                                        <span className='p-2 font-bold'>{item.title}</span>
                                        <span>{dropdown === item.title? <MdKeyboardArrowUp/> : <MdKeyboardArrowDown/>}</span>
                                    </h1>
                                    {
                                        dropdown === item.title && (
                                            <div>
                                                <p className='text-start px-3 text-stone-700'>{item.details}</p> 
                                            </div>
                                        )
                                    }
                                </div> 
                            )
                        })
                    }
                </div>
            </div> 
        </div>      
    </div>
  )
}

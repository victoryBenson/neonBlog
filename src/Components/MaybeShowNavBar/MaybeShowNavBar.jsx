import React,{useEffect, useState}from 'react'
import { useLocation } from 'react-router-dom'

export const MaybeShowNavBar = ({children}) => {
    const location = useLocation(false)
    const [showNav, setShowNav] = useState()

    useEffect(() => {
    //   console.log(`this is location`, location)
    
    if (location.pathname === '/signin') {
        setShowNav(false)
    }else if (location.pathname === '/signup') {
        setShowNav(false)
    }else{
        setShowNav(true)
    }

    }, [location])
    
  return (
    // display
    <div>{showNav && children}</div>
  )
}

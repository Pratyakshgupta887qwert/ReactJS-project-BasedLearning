import React from 'react'
import Buttons from './Buttons';
function Navbar(){
    return(
        <>
        <nav className='flex'>
        <img className='h-30' src='loog.jpg' alt='logo'></img>
        {/* <ul className='flex'>
            <li className='mr-10'>HOME</li>
            <li className='mr-10'>ABOUT US </li>
            <li className='mr-10'>CONTACT US</li>
        </ul> */}
        <div className='flex gap-20 ml-250'>
        <Buttons label="HOME"/>
        <Buttons label="ABOUT US"/>
        <Buttons label="CONTACT US"/>
        </div>
        </nav>
        </>
    )
}
export default Navbar;
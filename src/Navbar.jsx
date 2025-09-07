import React from 'react'
function Navbar(){
    return(
        <>
        <nav className='flex items-center justify-between px-8 py-4'>
        <img className='h-30' src='loog.jpg' alt='logo'></img>
        <ul className='flex'>
            <li className='mr-10'>HOME</li>
            <li className='mr-10'>ABOUT US </li>
            <li className='mr-10'>CONTACT US</li>
        </ul>
        </nav>
        </>
    )
}
export default Navbar;
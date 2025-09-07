import React from 'react'
function Header(){
    return(
        <>
        <div>
            <nav className='flex justify-between'>
            <img className='h-20 w-40' src="R.png" alt='logo'></img>
            <ul class='flex'>
                <li className='mr-5 mt-5' href='www.google.com'>MENU</li>
                <li className='mr-5 mt-5' href=''>LOCATION</li>
                <li className='mr-5 mt-5' href=''>ABOUT</li>
                <li className='mt-5' href=''>CONTACT</li>
            </ul>
            <button className='mr-10 bg-red-500 pr-4 pl-4 pt-0 pb-0 mt-5 rounded-xl' onClick={`#`}> Log In</button>
            </nav>
        </div>
        </>
    )
}
export default Header
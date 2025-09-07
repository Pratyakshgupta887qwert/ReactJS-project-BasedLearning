import React from 'react'
function Header(){
    return(
        <>
        <div>
            <nav className='flex justify-between'>
            <img className='h-20 w-40 mt-1' src="R.png" alt='logo'></img>
            <ul class='flex mt-8 text-gray-500'>
                <li className='mr-5 mt-1' href='www.google.com'>MENU</li>
                <li className='mr-5 mt-1' href=''>LOCATION</li>
                <li className='mr-5 mt-1' href=''>ABOUT</li>
                <li className='mt-1' href=''>CONTACT</li>
            </ul>
            <button 
  className="mr-10 bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-2 mt-1 rounded-lg shadow-md transition">
  Log In
</button>
            </nav>
        </div>
        </>
    )
}
export default Header
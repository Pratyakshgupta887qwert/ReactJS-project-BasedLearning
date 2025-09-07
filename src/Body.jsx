import React from 'react'
import Viaemailform from './Viaemailform';
function Body(){
    return(
        <>
        <div className='ml-30 font-serif'>
        <h1 className='font-extrabold text-4xl '>CONTACT US</h1>
        <p className='mr-90 mt-10 tracking-wide text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, eos. Quasi facere fuga porro dignissimos et quisquam, omnis nostrum, veritatis consectetur at molestias ipsam obcaecati dolorum optio aperiam nemo itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis cumque atque ipsam, porro totam veniam!</p>
        </div>

        <div className='flex ml-30'>
            
            <form className='mt-20'>
            <button className='text-white bg-black pl-5 pr-5 pt-2 pb-2 rounded-sm'>VIA SUPPORT CHAT</button>
            <button className='text-white bg-black pl-5 pr-5 pt-2 pb-2 ml-10 w-50 rounded-sm'>VIA CALL</button>
            <br></br>
            <Viaemailform/>
            </form>
            <img className='h-150 mt-8 ml-90' src='Screenshot 2025-09-07 153441.png'></img>
            
        </div>
        
        </>
    )
}
export default Body;

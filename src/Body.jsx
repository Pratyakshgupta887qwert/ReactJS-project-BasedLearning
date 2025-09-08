import React from 'react'
import Viaemailform from './Viaemailform';
import Submit from './Submit';
import { AiTwotoneMessage } from "react-icons/ai";
import { BiFontSize } from 'react-icons/bi';
function Body(){
    return(
        <>
        <div className='ml-30 font-serif'>
        <h1 className='font-extrabold text-4xl '>CONTACT US</h1>
        <p className='mr-90 mt-10 tracking-wide text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, eos. Quasi facere fuga porro dignissimos et quisquam, omnis nostrum, veritatis consectetur at molestias ipsam obcaecati dolorum optio aperiam nemo itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis cumque atque ipsam, porro totam veniam!</p>
        </div>

        <div className='flex ml-30'>
            
            <div className='mt-20'>
            <button className='cursor-pointer text-white bg-black pl-5 pr-8 pt-5 pb-5 rounded-sm font-bold '>VIA SUPPORT CHAT</button>
            <button className='cursor-pointer text-white bg-black pl-5 pr-8 pt-5 pb-5 ml-10 w-50 rounded-sm font-bold'>VIA CALL</button>
            <br></br>
            <Viaemailform/>

            <br></br>

            <form>
                <div className=' mt-10'>
                <lable>
                    Name
                </lable>
                <input className='border-solid border-black ml-10 pl-10 pr-10 w-90 h-10 ' type='text' placeholder='Name'></input>
                </div>
            </form>
            <Submit/>
            </div>
            <img className='h-150 mt-8 ml-90' src='Screenshot 2025-09-07 153441.png'></img>
            
        </div>
        
        </>
    )
}
export default Body;

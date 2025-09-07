import React from 'react'
function Bodycontent(){
    return(
        <>
        <div className='flex'>
        <div className='font-bold ml-30 mt-15 text-8xl'>
            <p>YOUR FEET</p>
            <p>DESERVE </p>
            <p>THE BEST</p>
            <p className=' mt-8 font-semibold text-base text-gray-500'>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO <br></br>HELP YOU WITH OUR SHOES. YOUR FEET DESERVE <br></br>THE BEST AND WE'RE HERE TO HELP YOU WITH OUR <br></br>SHOES.</p>

            <button className='text-white bg-rose-500 text-lg pl-4 pr-4 font-medium rounded'>Shop Now</button>

            <button className='font-medium text-gray-500 text-lg border ml-2 pl-4 pr-4 rounded'>
  Category
</button>
<p className='font-medium text-lg mt-8'>Also available on</p>
<div className='flex'>
<img className='h-10 mt-2' src='flipkart.png' alt='flipkart'></img>
<img className='h-10 mt-2 ml-2 mt-3' src='amazon.png' alt='amazon'></img>
</div>
</div>

<div>
<img className='h-120 mt-20 ml-100' src='shoes.png' alt='shoes'></img>
        </div>
</div>
        </>
    )
}
export default Bodycontent
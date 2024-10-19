import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
           
           <div>
            <div className='flex '>
            <img src={assets.logo} className='mb-0 mr-1 w-32 ' alt=''/>
            <p className='text-2xl mt-0'>CARES</p>
            </div>
            <p className='w-full md:w-2/3 text-gray-600'>
         We donot ask for your bank account or card details verbally or telephonically.Donot divulge these to fraudsters & imposters claming to be calling on our behalf.
            </p>
           </div>
           <div>
            <p className='text-xl font-medium mmd-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-400'>
<li>Home</li>
<li>About</li>
<li>Delivery</li>
<li>Privacy Policy</li>
            </ul>
           </div>
           <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
<li>+91 1234567890</li>
<li>forever@gmail.com</li>

            </ul>
           </div>
      </div>
<div>
    <hr/>
    <p className='py-5 text-sm text-center'>Copyright 2024@forever.com.All Right Reserved</p>
</div>
    </div>
  )
}

export default Footer

import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

function About() {

  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
         <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <p>
        Fashion is a dynamic and expressive form of art that reflects cultural, social, and individual identities. It constantly evolves, drawing inspiration from history,
         contemporary trends, and global influences.</p>
        <p> Designers experiment with fabrics, colors, and silhouettes to create garments that tell stories and make statements. Whether through high fashion on runways or streetwear in everyday life, fashion is an ever-changing narrative
           that bridges the personal with the cultural.</p>
           <b className='text-gray-800'>Our Mission</b>
           <p>Beyond mere clothing, fashion shapes the way people present themselves, conveying personal style, mood, and even values. It has the power to both challenge norms and celebrate diversity, acting
             as a platform for creativity and innovation.</p>
      </div>
      <div className='text-xl py-4'>
<Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
       <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
<b>Quality Assurance</b>
<p className='text-gray-700'>Apparel garments, accessories, and other textile products are assessed for quality in the preproduction phase, during production, and with a final
   inspection after the product has been completed.</p>
       </div>
       <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
<b>Convenience:</b>
<p className='text-gray-700'>With our user-friendly interface and hassle -free ordering process,shopping is effordlessly easy</p>
       </div>
       <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
<b>Exceptional Customer Service:</b>
<p className='text-gray-700'>Our team of dedicated professionals is here to assist yout the way,ensuring your satisfaction in our top priority.</p>
       </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About

import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='container relative rt-16'>
      <Image 
        className='w-[100%] h-[450px]' 
        src="/2.jpg" 
        width={1500} 
        height={900} 
        alt='Hero Image'
      />
      
      <div className="container pt-8">
        <h2 className='text-center font-bold text-6xl pb-6'>About Us</h2>
        <p className='text-center text-xl pb-8'>
        we celebrate individuality and empower confidence through high-quality, inclusive beauty products.
        </p>
        
        {/* First Row */}
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <Image 
              className='w-[100%] h-[400px]' 
              src="/3.jpg" 
              width={700} 
              height={500} 
              alt='Brand Image'
            />
          </div>
          <div className="space-y-4">
            <h3 className='text-center text-3xl font-bold'>Behind The Brand</h3>
            <p className='text-xl text-justify'>
            At GlamAura, we’re more than a makeup brand; we’re a passionate team of innovators, artists, and beauty advocates with a shared vision—to redefine beauty standards and inspire self-confidence in everyone. Our brand was born out of a desire to create products that not only enhance but celebrate individuality.

Every product we design is the result of careful research, thoughtful formulation, and a commitment to quality. We work closely with top beauty experts, chemists, and artists to ensure that our offerings are inclusive, cruelty-free, and crafted to perfection.

What drives us? Seeing you glow. We believe that makeup should be fun, empowering, and true to you.
            </p>
          </div>
        </div>
        
        {/* Second Row */}
        <div className="grid md:grid-cols-2 gap-16 pt-8">
          <div className="space-y-4 order-last md:order-first">
            <h3 className='text-center text-3xl font-bold'>Our Story</h3>
            <p className='text-xl text-justify'>
            Welcome to GlamAura, where beauty meets creativity, and every shade tells a story. Our journey began with a passion for empowering individuals to feel confident, bold, and unapologetically themselves. We believe that makeup is more than just a routine—it's a powerful tool for self-expression and a celebration of uniqueness.

Founded by beauty enthusiasts, GlamAura is committed to crafting high-quality, cruelty-free products that bring out the best in everyone. From vibrant lip colors to mesmerizing eyeshadows, our products are designed to suit all skin tones, celebrate diversity, and make beauty accessible to all.
            </p>
          </div>
          <div>
            <Image 
              className='w-[100%] h-[400px]' 
              src="/6.jpg" 
              width={700} 
              height={500} 
              alt='Our Story Image'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
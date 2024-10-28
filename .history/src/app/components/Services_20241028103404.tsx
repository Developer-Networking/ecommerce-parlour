import React from 'react'
import ServicesCard from './';

const data = [
    {
        img:"/icon__cosmetics.png",
        title:"Naturally Derived",
        desc:"Natural and organic beauty product"
    },
    {
        img:"/icon__ship.png",
        title:"Free Shipping",
        desc:"Free shipping on all orders over $99"
    },
    {
        img:"/icon__money.png",
        title:"Secure Payment",
        desc:"Fully protected when paying online"
    }
];
const Services = () => {
  return (
<div>
    <h2 className='text-center text-6xl mt-8 font-semibold'>Our Services</h2>
    
    <div className='container pt-16 '>
        <div className="grid md:grid-cols-2 gap-y-8 lg:grid-cols-3 gap-4">
            {data.map(item =>( 
                <ServicesCard key={item.title}
                 img={item.img} 
                 title={item.title} 
                 desc={item.desc}/>
                ))}
        </div>
    </div>
</div>
  )
}

export default Services;
import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaRegEye, FaShoppingCart } from 'react-icons/fa';
import {AiOutlineStar, AiFillStar, AiOutlineShoppingCart} from "react-icons/ai";
import { addToCart } from '@/redux/fertures/';
import { useAppDispatch } from '@/redux/hooks';


 export interface IProduct{
    id:number;
    img:string;
    name:string;
    price:number;
    sale:boolean | undefined;
}
const ProductCard = ({id, img, name, price, sale}:IProduct) => {
const router = useRouter();

const dispatch = useAppDispatch()
 
 
  const getRating = () => {
    const randomNumber = (min:number, max:number) => {
        return Math.ceil(Math.random() * (max - min) + min);
    };
    switch (randomNumber(0,5)) {
      case 0:
        return(
          <div className="flex justify-center text-rose-800 pt-4 pb-2">
            <AiOutlineStar/>
            <AiOutlineStar/>
            <AiOutlineStar/>
            <AiOutlineStar/>
            <AiOutlineStar/>
          </div>
        );
        case 1:
          return(
            <div className="flex justify-center text-rose-800 pt-4 pb-2">
              <AiFillStar/>
              <AiOutlineStar/>
              <AiOutlineStar/>
              <AiOutlineStar/>
              <AiOutlineStar/>
            </div>
          );  
          case 2:
            return(
              <div className="flex justify-center text-rose-800 pt-4 pb-2">
                <AiFillStar/>
                <AiFillStar/>
                <AiOutlineStar/>
                <AiOutlineStar/>
                <AiOutlineStar/>
              </div>
            );  
            case 3:
              return(
                <div className="flex justify-center text-rose-800 pt-4 pb-2">
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiOutlineStar/>
                  <AiOutlineStar/>
                </div>
              );  
              case 4:
                return(
                  <div className="flex justify-center text-rose-800 pt-4 pb-2">
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiOutlineStar/>
                  </div>
                );  
                case 5:
                  return(
                    <div className="flex justify-center text-rose-800 pt-4 pb-2">
                      <AiFillStar/>
                      <AiFillStar/>
                      <AiFillStar/>
                      <AiFillStar/>
                      <AiFillStar/>
                    </div>
                  );  
      

      default:
       return <div></div>
    }
};
const addProductToCart = (e: React.FormEvent) => {
  e.stopPropagation()
  const payload = {
    id,
    name,
    img,
    price,
    quantity:1
  }
  dispatch(addToCart(payload))
}

  return (
    <div className='group cursor-pointer' onClick={() => router.push(`/details/${id}`)}>
        <div className="relative">
            <Image className="w-full"
            width={1000}
            height={1142}
            src={img}
            alt={name}/>
            {sale && (<div className='bg-red-600 inline-block absolute top-0 left-0 text-[14px] text-white rounded-md px-2 py-[2px] m-4'>
             SALE</div>
             )}
             <div className='absolute top-0 left-0 w-full h-full bg-[#00000050] opacity-0 transition-opacity duration-500 group-hover:opacity-100 cursor-pointer'>
                <div className="absolute bottom-0 mb-4 left-[50%] translate-x-[-50%] flex gap-2">
                    {/* <div className="bg-white w-[50px] h-[50px] text-[26px] grid place-items-center rounded-md hover:bg-rose-800">
                    <FaRegEye />
                    </div> */}
                    <div className="bg-white w-[50px] h-[50px] text-[26px] grid place-items-center rounded-md hover:bg-rose-800" onClick={addProductToCart} >
                    <AiOutlineShoppingCart />
                    </div>
                </div>
             </div>

        </div>
        {getRating()}
        <h2 className='font-medium pb-3 hover:text-rose-800'>{name}</h2>
        <p className='text-gray-600 font-semibold'>${price}.00</p>
    </div>
  )
}

export default ProductCard;
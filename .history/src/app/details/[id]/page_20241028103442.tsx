'use client'
import React, {useEffect, useState} from 'react'
import { useParams } from "next/navigation"
import Data from "@/app/utils/productData"
import Image from 'next/image'
import Link from 'next/link'
import { addToCart } from '@/redux/fertures/cartSlicenpm i framer-motion'
import {AiFillStar, AiOutlineStar, AiOutlineShoppingCart, AiOutlineHeart} from "react-icons/ai"
import {FaFacebookSquare, FaInstagram, FaTwitter} from "react-icons/fa"
import  {MdCompareArrows} from "react-icons/md"
import { div } from 'framer-motion/client'
import { useAppDispatch } from '@/redux/hooks';



const DetailPage = () => {
    const params = useParams();
    const [productData, setProductData] = useState<any>();

    interface IProduct{
        id:number;
        img:string;
        name:string;
        price:number;
        quantity:number;}
    const dispatch = useAppDispatch()
    const addProductToCart = (e: React.FormEvent) => {
        e.stopPropagation()
        const payload = {
          id:productData.id,
          name:productData.name,
          img:productData.img,
          price:productData.price,
          quantity:1
        }
        dispatch(addToCart(payload))
      }

    useEffect (() => {
        const id = params.id;
        const getProductData = Data.filter((item) => item.id.toString() === id)[0];
        setProductData(getProductData);
    });

  return (
    <>
    <div className="container pt-8">
       <div className="grid md:grid-cols-2 gap-16">
            <div>
                <Image className="w-full h-full" src={productData?.img} width={1000} height={1200} alt={productData?.name}/>
           </div>
                <div className="space-y-4">
                            <div className="flex items-center text-rose-800">
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiOutlineStar/>
                                <p className='text-gray-400 text-[14px] ml-2 hover:text-rose-800 cursor-pointer'>
                                    (8 customer review)
                                </p>
                            </div>
                            <div className='text-[#161616] space-y-6'>
                                <h2 className='text-3xl font-semibold'>{productData?.name}</h2>
                                <p className='text-xl'>${productData?.price}.00</p>
                            </div>
                            <p className="text-gray-500 text-[14px]">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem numquam consectetur sapiente voluptate aspernatur. Labore temporibus, nisi magnam maxime ipsam tempora sequi molestiae quos quis error, aperiam mollitia recusandae enim?
                            </p>
                            <p className="text-gray-500 text-[14px]">20 in stock</p>
                            <button className='uppercase bg-black py-4 px-8 rounded-lg text-white flex gap-2 items-center hover:bg-rose-800' onClick={addProductToCart}>
                                <AiOutlineShoppingCart className="text-[24px]"/>
                                Add to Cart
                            </button>
                            <div className="bg-gray-400 w-[30px] h-[2px]"/>
                            <div>Name:{productData?.name}</div>
                            <div className="capitalize">
                                Category:{productData?.category[0]}
                            </div>
                            <div className="flex gap-1 items-center capitalize">
                                Tags:{""}
                                {productData?.category.map((item:any) =>(
                                    <div key={item}> {item}</div>
                                ))}
                            </div>
                            <div className="bg-gray-400 w-[30px] h-[2px]"/>
            </div>
         </div>
     </div>
    </>
 )};
export default DetailPage;
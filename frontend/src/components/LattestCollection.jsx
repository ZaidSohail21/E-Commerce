import React, { useContext, useEffect, useState } from 'react'
import {ShopContext} from "../context/Context"
import Title from './Title';
import ProductItems from './ProductItems';


const LattestCollection = () => {
    const {products} =useContext(ShopContext);
    const [latestProduct,setlatestProduct]=useState([]);

    useEffect(()=>{
        setlatestProduct(products.slice(0,10));
    },[])
  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={'COLLECTION'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt reiciendis perspiciatis distinctio consequuntur iure iste architecto magni repudiandae ut quaerat, itaque, sunt impedit.</p>
      </div>
      {/* Rendering Products */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:gris-col-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
            latestProduct.map((item,index)=>(
                <ProductItems key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))
        }
        
      </div>
      
    </div>
  )
}

export default LattestCollection

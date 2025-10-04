import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/Context'
import Title from './Title';
import ProductItems from './ProductItems';

const RelatedProduct = ({category}) => {
  const {products} =useContext(ShopContext);
  const [related,setrelated]=useState([]);

  useEffect(()=>{
    if(products.length>0){
        let productCopy=products.slice();

        productCopy=productCopy.filter((item)=>category=item.category);
        setrelated(productCopy.slice(0,5));
        
    }

  },[products])
  
    return (
    <div className='my-24'>
      <div className='text-center text-3xl py-2'>
        <hr />
        <Title text1={'RELATED'} text2={' PRODUCT'} />
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-col-4 lg:grid-col-5 gap-4 gap-y-6'>
        {
            related.map((item,index)=>(
                <ProductItems key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
            ))
        }
      </div>
    </div>
  )
}

export default RelatedProduct

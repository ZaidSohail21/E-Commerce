import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/Context'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import ProductItems from '../components/ProductItems'

const Collection = () => {
  const {search, setsearch,showSearch,setshowSearch}=useContext(ShopContext)
  const { products } = useContext(ShopContext)
  const [ShowFilter, setShowFilter] = useState(true)
  const [FilterProduct, SetFilterProduct] = useState([]);
  const [category, setcategory] = useState([]);
  const [subcategory, setsubcategory] = useState([]);
  const [sortType, setsortType] = useState('relavent')

  const toogleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setcategory(prev => prev.filter(item => item != e.target.value))
    }
    else {
      setcategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {

    let productCopy = products.slice();

    if(showSearch && search){
      productCopy=productCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productCopy = productCopy.filter(item => category.includes(item.category))
    }
    SetFilterProduct(productCopy)
  }
  const sortProduct = () => {
    let fpcopy = FilterProduct.slice();
    switch (sortType) {
      case 'low-high':
        SetFilterProduct(fpcopy.sort((a, b) => (a.price - b.price)))
        break;
      case 'high-low':
        SetFilterProduct(fpcopy.sort((a, b) => (b.price - a.price)))
        break;
      default:
        applyFilter()
        break;
    }
  }

  useEffect(() => {
    sortProduct();
  }, [sortType])

  useEffect(() => {
    applyFilter();
  }, [category,search,showSearch]);


  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter Options  */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!ShowFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${ShowFilter ? 'rotate-90' : ''}`} alt="" />
        </p>
        {/* Category Filter  */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${ShowFilter ? " " : 'hidden'}`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Men'} onChange={toogleCategory} />Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Women'} onChange={toogleCategory} />Women
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Kid'} onChange={toogleCategory} />Kid
            </p>
          </div>
        </div>

      </div>
      {/* Right Side */}
      <div className='flex-1 '>
        <div className='flex-1 flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={"COLLECTION"} />
          <select onChange={(e) => setsortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low To High</option>
            <option value="high-low">Sort by: High To Low</option>
          </select>
        </div>
        {/* Map product */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            FilterProduct.map((item, index) => (
              <ProductItems key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Collection

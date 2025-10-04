import React, { useContext, useState } from 'react'
import { assets } from "../assets/assets"
import { NavLink, Link } from 'react-router-dom'
import { ShopContext } from '../context/Context'
const Navbar = () => {
    const [visible, setVisible] = useState(false)
    const {setshowSearch,getCartCount}=useContext(ShopContext)
    return (
        <div className='flex item-center justify-between py-5 font-medium'>
            <Link to='/'>
            <img src={assets.logo} alt="" className='w-36' />
            </Link>
            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                <NavLink to='/' className="flex flex-col items-center gap-1">
                    <p>HOME</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/collection' className="flex flex-col items-center gap-1">
                    <p>COLLECTION</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/about' className="flex flex-col items-center gap-1">
                    <p>ABOUT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/contact' className="flex flex-col items-center gap-1">
                    <p>CONTACT US</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
            </ul>
            <div className="flex items-center gap-6">
                <img onClick={()=>setshowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' />

                <div className='group relative'>
                    <Link to={'/login'}> <img className='w-5 cursor-pointer' src={assets.profile_icon} alt="" /> </Link>

                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text text-gray-500 rounded'>
                            <p className="cursor-pointer hover:text-black">My Profile</p>
                            <p className="cursor-pointer hover:text-black">Orders</p>
                            <p className="cursor-pointer hover:text-black">Logout</p>
                        </div>
                    </div>
                </div>
                <Link to='/cart' className="relative">
                    <img src={assets.cart_icon} alt="" className='w-5 min-w-5' />
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4
                  bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
                </Link>
                <img onClick={() => setVisible(true)} className='w-5 cursor-pointer sm:hidden' src={assets.menu_icon} alt="ssad" />
            </div>

            {/* Side Menu for Small Screen */}
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all' ${visible ? ' w-full' : 'w-0'}`}>
                <div className="flex flex-col text-gray-600">
                    <div onClick={(() => setVisible(false))} className='flex items-center gap-4 p-3 cursor-pointer'>
                        <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
                        <p>Back</p>
                    </div>
                    <NavLink onClick={() => setVisible(false)} className='py-2 my-1 pl-6 border-0 border-gray-600' to='/'>HOME</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 my-1 pl-6 border-0' to='/collection'>COLLECTION</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 my-1 pl-6 border-0' to='/about'>ABOUT</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 my-1 pl-6 border-0' to='/contact'>CONTACT US</NavLink>
                </div>

            </div>
        </div>
    )
}

export default Navbar

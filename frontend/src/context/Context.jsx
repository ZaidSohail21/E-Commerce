import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import {  toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const fee = 10;
    const currency = '$';
    const [search, setsearch] = useState('');
    const [showSearch, setshowSearch] = useState(true);
    const [carditem, setcaritem] = useState({});
    const navigate =useNavigate();


    const addToCart = async (itemid, size) => {
        if(!size){
            toast.error('Select Product Size');
            return;
        }
        let cartData = structuredClone(carditem)

        if (cartData[itemid]) {

            if (cartData[itemid][size]) {
                cartData[itemid][size] += 1;
            }
            else {
                cartData[itemid][size] = 1;
            }
        }
        else {
            cartData[itemid] = {};
            cartData[itemid][size] = 1;
        }
        setcaritem(cartData);
    }

    const upgradeQuantity=async(items,size,quantity)=>{
        let cartData=structuredClone(carditem);
        cartData[items][size]=quantity;
        setcaritem(cartData);
    }


    const getCartCount=()=>{
        let totalCount=0;
        for(const items in carditem){
            for(const item in carditem[items]){
                try{
                    if(carditem[items][item]>0){
                        totalCount += carditem[items][item]
                    }
                }catch(error){

                }
            }
        }
        return totalCount;
    }

    const getCartAmount=()=>{
        let totalAmount=0;
        for(const items in carditem){
            let itemInfo=products.find((product)=>product._id ===items);
            for(const item in carditem[items]){
                try{
                if(carditem[items][item]>0){
                    totalAmount +=itemInfo.price * carditem[items][item]
                }
            }
            catch(error){

            }
            }
        }
        return totalAmount;
    }
    const value = {
        products, currency, fee,
        search, setsearch, showSearch, setshowSearch,
        carditem,addToCart,
        getCartCount,upgradeQuantity,
        getCartAmount, navigate
    }
    useEffect(() => {
        console.log(carditem);

    }, [carditem])
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )

}
export default ShopContextProvider;


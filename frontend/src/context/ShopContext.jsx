import { createContext, useEffect, useState } from "react";
// import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const ShopContext=createContext();

const ShopContextProvider=(props)=>{
    
    const currency='₹';
    const delivery_fee=10;
    const backendUrl=import.meta.env.VITE_BACKEND_URL;
    
    const [search,setSearch]=useState('');
    const [showSearch,setShowSearch]=useState(false);
    const [cardItems,setCardItems]=useState({});
    const [products,setProducts]=useState([]);
    const [token,setToken]=useState('');
    const navigate=useNavigate();
const addToCart=async(itemId,size)=>{
    if(!size){
         toast.error('Select Product Size');
         return;
    }
    let cartData=structuredClone(cardItems);//cretae copy of card items
    if(cartData[itemId]){
        if(cartData[itemId][size]){
            cartData[itemId][size]+=1;
        }
        else{
            cartData[itemId][size]=1;//if product but not with same size
        }
    }
    else{
        cartData[itemId]={};
        cartData[itemId][size]=1;
    }
    setCardItems(cartData);
    //if loggged in in data base also update cart
    if (token) {
        try {
            await axios.post(backendUrl+'/api/cart/add',{itemId,size},{headers:{token } })
            console.log(backendUrl+'/api/cart/add');
            
        } catch (error) {
          console.log(error);
          toast.error(error.message)
        }
    }
}
const getCartCount=()=>{
    let totalCount=0;
    for(const items in cardItems){//product
        for(const item in cardItems[items]){//product size
                 try{
if(cardItems[items][item]>0)
{
    totalCount+=cardItems[items][item];
}
                 }catch(error){
 
                 }
        }
    }
    return totalCount;
}
const upDateQuantity=async(itemId,size,quantity)=>{
     let cartData=structuredClone(cardItems);
     cartData[itemId][size]=quantity;
     setCardItems(cartData);
     //if cart quantity is changed database is changed
     if (token) {
        try {
            await axios.post(backendUrl+'/api/cart/update',{itemId,size,quantity},{headers:{token}})
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
     }
}
// useEffect(()=>{
// console.log(cardItems);
// },[cardItems])
 const getCartAmount=()=>{
        let totalAmount=0;
for(const items in cardItems){
let itemInfo=products.find((product)=>product._id===items);
for(const item in cardItems[items]){
    try{
        if(cardItems[items][item]>0){
            totalAmount+=itemInfo.price*cardItems[items][item];
        }
    }
    catch(error){

    }
}
}
return totalAmount;
 }
 const getProductsData=async ()=>{
    try {
        const response=await axios.get(backendUrl+'/api/product/list')
       if(response.data.success){
 setProducts(response.data.products)
       }
       else{
        toast.error(response.data.message)
       }
        
    } catch (error) {
        console.log(error);
        toast.error(error.message)
    }
 }
 //when ever reloaded cart data to be updated from database not become 0
 const  getUserCart=async(token)=>{
  try {
    const response=await axios.post(backendUrl+'/api/cart/get',{},{headers:{token}})
    if (response.data.success) {
        setCardItems(response.data.cartData)
        
    }
  } catch (error) {
    console.log(error);
        toast.error(error.message)
  }
 }
 useEffect(()=>{
 getProductsData();
 },[])
//  after logged in refresh again go to login to encounter that
useEffect(()=>{
    if (!token&&localStorage.getItem('token')) {
     setToken(localStorage.getItem('token'))   
     getUserCart(localStorage.getItem('token'))
    }
})
    const value={
products,
currency,
delivery_fee,
search,setSearch,showSearch,setShowSearch,
cardItems,addToCart,setCardItems,
getCartCount,upDateQuantity,
getCartAmount,
navigate,backendUrl,setToken,token
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;
export const getCartItems=()=>{
const carItems = localStorage.getItem('cartItems')?
JSON.parse(localStorage.getItem('cartItems')):
[];
return carItems;

}

export const setCartItems = (cartItems)=>{
    localStorage.setItem('cartItems',JSON.stringify(cartItems))
}
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets"
import toast from "react-hot-toast";

export const AppContext = createContext()


export const AppContextProvider = ({ children }) => {
    const currency = import.meta.VITE_CURRENCY
    const navigate = useNavigate();
    const [user, setUser] = useState(false)
    const [isSeller, setIsSeller] = useState(false)
    const [showUserLogin, setShowUserLogin] = useState(false)
    const [products, setProducts] = useState([])
    const [cartItems, setCartItems] = useState({})
    // fetch all product
    const fetchProducts = async () => {
        setProducts(dummyProducts)
    }
    //Add Product To Cart
    const addToCart = (itemId) => {
        let cartData = structuredClone(cartItems)
        if (cartData[itemId]) {
            cartData[itemId] += 1;
        } else {
            cartData[itemId] = 1
        }
        setCartItems(cartData)
        toast.success("Added To Cart")
    }
    //Update Cart Item Quantity
    const updateCartItem = (itemId, quantity) => {
        let cartData = structuredClone(cartItems)
        cartData[itemId] = quantity
        setCartItems(cartData)
        toast.success("Cart Updated")
    }
    //Update Cart Item Quantity
    const removeFromCart = (itemId) => {
        let cartData = structuredClone(cartItems)
        if (cartData[itemId]) {
            cartData[itemId] -= 1;
            if (cartData[itemId] === 0) {
                delete cartData[itemId]
            }
        } else {
            cartData[itemId] = 1
        }
        toast.success("Removed From cart")
        setCartItems(cartData)
    }
    useEffect(() => {
        fetchProducts()
    }, [])
    const value = { navigate, user, setUser, isSeller, setIsSeller, showUserLogin, setShowUserLogin, products, currency, removeFromCart, updateCartItem, addToCart, cartItems }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}


export const useAppContext = () => {
    return useContext(AppContext)
}


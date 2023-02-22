import { createContext, useContext, useReducer } from "react";
import ShopReducer, { initialState } from "./ShopReducer";



const ShopContext =createContext(initialState);

export const ShopProvider = ({children}) =>{

    const [state, dispatch]=useReducer(ShopReducer, initialState)

    const addToCart = (product) =>{
        const updatedProducts = state.products.concat(product);
        CalCulateTotal(updatedProducts)
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                products : updatedProducts
            }
        });
    };
    const removeFromCart =(product) =>{
        const updatedProducts = state.products.filter(p => p.id !== product.id)
        CalCulateTotal(updatedProducts);
        dispatch({
            type :"REMOVE_FROM_PRO",
            payload : updatedProducts,
        })
    }
    const CalCulateTotal = (products) =>{
        let total =0;
        products.forEach(pro => {
            total += pro.price;
        }); 
        dispatch({
            type : "CALCULATER_TOTAL_PRICE",
            payload: total,
        })
    }
    const values ={
        products: state.products,
        total : state.total,
        addToCart,
        removeFromCart,
    }

    return <ShopContext.Provider value ={values}>
        {children}
    </ShopContext.Provider>
};

const useShop =()=>{
    const context = useContext(ShopContext);
    if(context ===undefined){
        throw new Error("context mst be used inside shopContext")
    }
    return context;
};
export default useShop;




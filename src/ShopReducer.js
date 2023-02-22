export const initialState ={
    products :[],
    total: 0
}

const ShopReducer = (state, action) => {
    const {type , payload} = action;
    switch(type){
        case "ADD_TO_CART" :
            return {
                ...state,
                products : payload.products
            };

        case "REMOVE_FROM_PRO" :
            return {
                ...state,
                products : payload.products
            };
        case "CALCULATER_TOTAL_PRICE":
            return {
                ...state,
                total : payload
            }
        default : 
            throw new Error("un know reducer");
    }
};

export default ShopReducer
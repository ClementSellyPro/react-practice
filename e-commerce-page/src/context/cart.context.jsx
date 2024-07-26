import { createContext, useContext, useState } from "react";

let CartContext = createContext({
    listItem: [],
    setListItem: () => {},
    amountCurrentItem: 0,
    setAmountCurrentItem: () => {},
});

export default CartContext;

const CartContextProvider = ({children}) => {
    const [listItem, setListItem] = useState([]);
    const [amountCurrentItem, setAmountCurrentItem] = useState(0);

    return (
        <CartContext.Provider value={{
            listItem,
            setListItem,
            amountCurrentItem,
            setAmountCurrentItem,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContextProvider};


export const useCartContext = () => {
    const contextValue = useContext(CartContext);
    return contextValue;
}
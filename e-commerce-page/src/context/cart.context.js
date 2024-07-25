import { createContext, useState } from "react";

let CartContext = createContext({
    listItem: [],
    setListItem: () => {},
});

export default CartContext;

const CartContextProvider = ({children}) => {
    const [listItem, setListItem] = useState([]);

    return (
        <CartContext.Provider value={{
            listItem,
            setListItem,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContextProvider};
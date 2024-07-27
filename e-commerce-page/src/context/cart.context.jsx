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

    // delete item and update items list
    function deleteItem(e){
        let targetID = e.target.parentElement.dataset.id
        let newUpdatedList = listItem;
        newUpdatedList.splice(targetID, 1);
        setListItem(newUpdatedList);
        setAmountCurrentItem(0);
    }

    return (
        <CartContext.Provider value={{
            listItem,
            setListItem,
            amountCurrentItem,
            setAmountCurrentItem,
            deleteItem,
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
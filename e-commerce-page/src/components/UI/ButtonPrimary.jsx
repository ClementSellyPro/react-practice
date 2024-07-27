import { useCartContext } from '../../context/cart.context';
import './ButtonPrimary.css';

function ButtonPrimary({children, currentProduct}){

    const {amountCurrentItem, setAmountCurrentItem, listItem ,setListItem} = useCartContext()

    // add amount of the product in cart user
    function handleAddItem(){
        if(amountCurrentItem > 0){
            let amount = amountCurrentItem;
            currentProduct['amount'] = amount;
            let newItem = {...currentProduct};
            setListItem([...listItem, newItem]);
            setAmountCurrentItem(0);
        }
    }

    return (
        <button onClick={handleAddItem} className='ButtonPrimary'>
            {children}
        </button>
    )
}

export default ButtonPrimary;
import { useCartContext } from '../../context/cart.context';
import './ButtonPrimary.css';

function ButtonPrimary({children, currentProduct}){

    const {amountCurrentItem, listItem ,setListItem} = useCartContext()

    function handleAddItem(){
        if(amountCurrentItem > 0){
            currentProduct['amount'] = amountCurrentItem;
            setListItem([...listItem, currentProduct]);
        }
    }

    return (
        <button onClick={handleAddItem} className='ButtonPrimary'>
            {children}
        </button>
    )
}

export default ButtonPrimary;
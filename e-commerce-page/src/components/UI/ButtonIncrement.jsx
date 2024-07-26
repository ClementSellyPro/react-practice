import './ButtonIncrement.css';
import minusIcon from '../../images/icon-minus.svg';
import plusIcon from '../../images/icon-plus.svg';
import { useCartContext } from '../../context/cart.context';

function ButtonIncrement(){

    const {amountCurrentItem, setAmountCurrentItem} = useCartContext();

    function handleAmountItem(e){
        let target = e.target;
        if(target.classList.contains('minus-icon') && amountCurrentItem > 0){
            setAmountCurrentItem(amountCurrentItem - 1);
        }
        if(target.classList.contains('plus-icon')){
            setAmountCurrentItem(amountCurrentItem + 1);
        }
    }

    return (
        <div className='ButtonIncrement'>
            <img onClick={handleAmountItem} className='minus-icon' src={minusIcon} alt='Minus Icon' />
            <span className='item-number'>{amountCurrentItem}</span>
            <img onClick={handleAmountItem} className='plus-icon' src={plusIcon} alt='Plus Icon' />
        </div>
    )
}

export default ButtonIncrement;
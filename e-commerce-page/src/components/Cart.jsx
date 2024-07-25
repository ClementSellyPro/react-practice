import '../style/Cart.css';
import cartIcon from '../images/icon-cart.svg';
import { useState } from 'react';
import {useCartContext} from '../context/cart.context';

function Cart(){

    const [activeCart, setActiveCart] = useState(false);
    const {listItem} = useCartContext();

    function handleActiveCart(){
        setActiveCart(!activeCart);
    }

    return (
        <div className='Cart'>
            <img onClick={handleActiveCart} className='cart-icon' src={cartIcon} alt='Cart Icon' />
            {activeCart && <div className='Cart_section'>
                <div className='Cart_header'>
                    <h3 className='Cart_header_title'>Cart</h3>
                </div>
                <div className='Cart_content'>
                    {listItem.length === 0 ? <div className='empty-cart'>Your cart is empty</div> : 'yes map the list here'}
                </div>
            </div>
            }
        </div>
    )
}

export default Cart;
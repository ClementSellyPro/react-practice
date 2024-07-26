import '../style/Cart.css';
import cartIcon from '../images/icon-cart.svg';
import deleteIcon from '../images/icon-delete.svg';
import { useState } from 'react';
import {useCartContext} from '../context/cart.context';
import ButtonPrimary from './UI/ButtonPrimary';

function Cart(){

    const [activeCart, setActiveCart] = useState(false);
    const {listItem, setListItem} = useCartContext();

    // display or hide the cart
    function handleActiveCart(){
        setActiveCart(!activeCart);
    }

    // delete item and update items list
    function handleDeleteItem(e){
        let targetID = e.target.parentElement.dataset.id
        let newUpdatedList = listItem;
        newUpdatedList.splice(targetID, 1);
        setListItem(newUpdatedList);
    }

    return (
        <div className='Cart'>
            <img onClick={handleActiveCart} className='cart-icon' src={cartIcon} alt='Cart Icon' />
            {activeCart && <div className='Cart_section'>
                <div className='Cart_header'>
                    <h3 className='Cart_header_title'>Cart</h3>
                </div>
                <div className='Cart_content'>
                    <div className='Cart_item-list'>
                    {listItem.length === 0 ? <div className='empty-cart'>Your cart is empty</div> 
                    : 
                    listItem.map((item, index) => {
                        let currentPrice = item.price - (item.price * 50/100);
                        return (
                            <div key={index} data-id={index} className='Cart_item'>
                                {/* <img /> */}
                                <div className='Cart_item-detail'>
                                    <div className='Cart_item-name'>{item.name}</div>
                                    <div className='Cart_item-price-section'>
                                        <div className='Cart_item-amount'>${currentPrice.toFixed(2)} x {item.amount}</div>
                                        <div className='Cart_item-total-price'>${(currentPrice * item.amount).toFixed(2)}</div>
                                    </div>
                                </div>

                                <img onClick={handleDeleteItem} className='Car_delete-icon' src={deleteIcon} alt='Delete Icon' />
                            </div>
                            )
                        })
                    }
                    </div>
                    {listItem.length === 0 ? '' : <ButtonPrimary>Checkout</ButtonPrimary>}
                </div>
            </div>
            }
        </div>
    )
}

export default Cart;
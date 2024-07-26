import '../style/ProductDetail.css';
import ButtonIncrement from './UI/ButtonIncrement';
import ButtonPrimary from './UI/ButtonPrimary';
import cartIcon from '../images/icon-cart.svg';

function ProductDetail({currentProduct}){
    return (
        <div className='ProductDetail'>
            <h2 className='product-brand'>{currentProduct.brand}</h2>
            <h1 className='product-name'>{currentProduct.name}</h1>
            <div className='product-description'>
                {currentProduct.description}
            </div>
            <div className='production-price-info'>
                <div className='product-price-current'>${(currentProduct.price - (currentProduct.price * 50/100)).toFixed(2)}</div>
                {currentProduct.promotion && <div className='product-price-promotion'>{currentProduct.discount}%</div>}
            </div>
            <div className='product-price-base'>${currentProduct.price.toFixed(2)}</div>

            <div className='btn-section'>
                <ButtonIncrement />
                <ButtonPrimary currentProduct={currentProduct}>
                    <img className='cart-icon-btn' src={cartIcon} alt='Cart Icon' />
                    Add to cart
                </ButtonPrimary>
            </div>
        </div>
    )
}

export default ProductDetail;
import image1tb from '../images/image-product-1-thumbnail.jpg';
import image2tb from '../images/image-product-2-thumbnail.jpg';
import image3tb from '../images/image-product-3-thumbnail.jpg';
import image4tb from '../images/image-product-4-thumbnail.jpg';

// display all thumbnails about the product
function ImageList({handleChangeImage}){
    return (
        <div className="ImageList">
            <img onClick={handleChangeImage} data-id='1' className='imageList-item selected-item' src={image1tb} alt='Product 1' />
            <img onClick={handleChangeImage} data-id='2' className='imageList-item' src={image2tb} alt='Product 2' />
            <img onClick={handleChangeImage} data-id='3' className='imageList-item' src={image3tb} alt='Product 3' />
            <img onClick={handleChangeImage} data-id='4' className='imageList-item' src={image4tb} alt='Product 4' />
        </div>
    )
}

export default ImageList;
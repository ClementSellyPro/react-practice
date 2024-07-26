import { useState } from 'react';
import '../style/ImageSection.css';
import ImageList from './ImageList';
import image1 from '../images/image-product-1.jpg';
import image2 from '../images/image-product-2.jpg';
import image3 from '../images/image-product-3.jpg';
import image4 from '../images/image-product-4.jpg';

function ImageSection(){

    const [currentSelectedImage, setCurrentSelectedImage] = useState(1);

    function handleChangeImage(e){
        // set the new selected Image to display as main Image
        let targetID = e.target.dataset.id
        setCurrentSelectedImage(targetID);
        // reset the selected thumbnail
        let imageList = e.target.parentElement.childNodes;
        imageList.forEach(image => {
            if(image.classList.contains('selected-item')){
                image.classList.remove('selected-item');
            }
        });
        // set the new selected thumbnail
        e.target.classList.add('selected-item');
    }
    
    return (
        <div className='ImageSection'>
            <img className='main-image' 
                src={
                    currentSelectedImage === '4' ? image4 : 
                    currentSelectedImage === '3' ? image3 : 
                    currentSelectedImage === '2' ? image2 : image1
                    } alt='Product' 
            />
            <ImageList handleChangeImage={handleChangeImage} currentSelectedImage={currentSelectedImage} />
        </div>
    )
}

export default ImageSection;
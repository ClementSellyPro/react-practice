import '../style/CardsContainer.css';

function CardsContainer({children}){
    return (
        <div className='CardsContainer'>
            {children}
        </div>
    );
}

export default CardsContainer;
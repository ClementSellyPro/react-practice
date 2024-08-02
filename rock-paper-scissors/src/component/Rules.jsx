import '../style/Rules.css';
import rulesImage from '../images/image-rules.svg';
import close from '../images/icon-close.svg';

function Rules({setIsRulesActive}){

    function handleCloseRules(){
        setIsRulesActive(false);
    }

    return (
        <div className='Rules'>
            <h2 className='Rules__title'>RULES</h2>
            <img onClick={handleCloseRules} className='Rules__close-btn' src={close} alt='Close button' />
            <img className='Rules__img' src={rulesImage} alt='Rules' />
        </div>
    )
}

export default Rules;
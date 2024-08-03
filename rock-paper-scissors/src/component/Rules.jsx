import '../style/Rules.css';
import rulesImage from '../images/image-rules.svg';
import close from '../images/icon-close.svg';

function Rules({rulesRef, setIsRulesActive}){

    function handleCloseRules(){
        setIsRulesActive(false);
    }

    function clickOutsideRules(e){
        let target = e.target;
        if(!rulesRef.current.contains(target)){
            setIsRulesActive(false);
        }
    }

    return (
        <div onClick={clickOutsideRules} className='Rules-container'>

        <div ref={rulesRef} className='Rules'>
            <h2 className='Rules__title'>RULES</h2>
            <img onClick={handleCloseRules} className='Rules__close-btn' src={close} alt='Close button' />
            <img className='Rules__img' src={rulesImage} alt='Rules' />
        </div>
        
        </div>
    )
}

export default Rules;
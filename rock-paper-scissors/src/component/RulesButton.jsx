import '../style/RulesButton.css';

function RulesButton({setIsRulesActive}){

    function handleDisplayRules(){
        setIsRulesActive(true);
    }

    return (
        <button onClick={handleDisplayRules} className='RulesButton'>
            RULES
        </button>
    )
}

export default RulesButton;
import { useContext, useEffect, useState } from "react";
import SelectionContext from "../context/Selection.context";
import Circle from "../component/Circle";
import { motion } from "framer-motion";
// pages style regroup in app.css

function PageVersus(){

    const {selectedWeapon, opponentSelection} = useContext(SelectionContext);
    const [result, setResult] = useState('');

    function comparison(){
        if(selectedWeapon === 'paper' && opponentSelection === 'scissors'){
            setResult('YOU LOSE');
        }else if(selectedWeapon === 'scissors' && opponentSelection === 'paper'){
            setResult('YOU WIN');
        }

        if(selectedWeapon === 'scissors' && opponentSelection === 'rock'){
            setResult('YOU LOSE');
        }else if(selectedWeapon === 'rock' && opponentSelection === 'scissors'){
            setResult('YOU WIN');
        }

        if(selectedWeapon === 'rock' && opponentSelection === 'paper'){
            setResult('YOU LOSE');
        }else if(selectedWeapon === 'paper' && opponentSelection === 'rock'){
            setResult('YOU WIN');
        }

        if(selectedWeapon === opponentSelection){
            setResult('DRAW');
        }
        console.log('selectedWeapon ::: ', selectedWeapon, ', opponentSelection ::: ', opponentSelection, ', result ::: ', result);
    } 

    useEffect(() => {
        comparison();
    },[selectedWeapon]);

    return (
        <div className="versus-section">
            <div className="versus-section__picked">
                <h1 className="picked-title">YOU PICKED</h1>
                <motion.div initial={{x: -100, opacity: 0}} animate={{x: 0, opacity: 1}}>
                    <Circle weapon={selectedWeapon} />
                <div className="versus-background"></div>
                </motion.div>
            </div>
            
            <div className="versus-section__picked">
                <h1 className="picked-title">THE HOUSE PICKED</h1>
                <motion.div initial={{x: 100, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{delay: 1}}>
                    <Circle weapon={opponentSelection} />
                </motion.div>
                <div className="versus-background"></div>
            </div>
        </div>
    )
}

export default PageVersus;
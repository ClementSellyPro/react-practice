import { useContext, useEffect, useState } from "react";
import SelectionContext from "../context/Selection.context";
import Circle from "../component/Circle";
import Result from "../component/Result";
import { motion } from "framer-motion";
// pages style regroup in app.css

function PageVersus(){

    const {selectedWeapon, opponentSelection, score, setScore, winner, setWinner} = useContext(SelectionContext);
    const [result, setResult] = useState('');

    function winSetter(){
        setResult('YOU WIN');
        setScore(score + 1);
        setWinner('you');
    }

    function loseSetter(){
        setResult('YOU LOSE');
        if(score > 0){
            setScore(score - 1);
        }
        setWinner('opponent');
    }

    function comparison(){
        if(selectedWeapon === 'paper' && opponentSelection === 'scissors'){
            loseSetter();
        }else if(selectedWeapon === 'scissors' && opponentSelection === 'paper'){
            winSetter();
        }

        if(selectedWeapon === 'scissors' && opponentSelection === 'rock'){
            loseSetter();
        }else if(selectedWeapon === 'rock' && opponentSelection === 'scissors'){
            winSetter();
        }

        if(selectedWeapon === 'rock' && opponentSelection === 'paper'){
            loseSetter();
        }else if(selectedWeapon === 'paper' && opponentSelection === 'rock'){
            winSetter();
        }

        if(selectedWeapon === opponentSelection){
            setResult('DRAW');
            setWinner('draw');
        }
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
                </motion.div>
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 2}}>
                    {winner === 'you' ? <div className="winner-box"></div> : null}
                </motion.div>
            </div>

            <motion.div initial={{opacity: 0, y: -100}} animate={{opacity: 1, y: 0}} transition={{delay: 2}}>
                <Result result={result}/>
            </motion.div>
            
            <div className="versus-section__picked">
                <h1 className="picked-title">THE HOUSE PICKED</h1>
                <motion.div initial={{x: 100, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{delay: 1}}>
                    <Circle weapon={opponentSelection} />
                </motion.div>
                <div className="versus-background"></div>
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 2}}>
                    {winner === 'opponent' ? <div className="winner-box"></div> : null}
                </motion.div>
            </div>
        </div>
    )
}

export default PageVersus;
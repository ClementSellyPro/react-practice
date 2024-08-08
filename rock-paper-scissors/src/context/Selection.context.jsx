import { createContext, useMemo, useState } from "react";

const SelectionContext = createContext({
    selectedWeapon: '',
    setSelectedWeapon: () => {},
    opponentSelection: '',
    score: '',
    setScore: () => {},
    winner: '',
    setWinner: () => {}
});

export default SelectionContext;


export function SelectionContextProvider({children}){
    
    const weapons = ['paper', 'scissors', 'rock'];
    const [selectedWeapon, setSelectedWeapon] = useState('');
    const [score, setScore] = useState(0);
    const [winner, setWinner] = useState('');

    const opponentSelection = useMemo(() => {
        const random = Math.floor(Math.random() * 3);
        return weapons[random];
    }, [selectedWeapon]);

    return (
        <SelectionContext.Provider value={{
            selectedWeapon,
            setSelectedWeapon,
            opponentSelection,
            score,
            setScore,
            winner,
            setWinner
        }}>
            {children}
        </SelectionContext.Provider>
    )
}
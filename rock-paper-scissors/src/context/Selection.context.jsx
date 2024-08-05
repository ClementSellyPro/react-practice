import { createContext, useState } from "react";

const SelectionContext = createContext({
    selectedWeapon: '',
    setSelectedWeapon: () => {}
});

export default SelectionContext;


export function SelectionContextProvider({children}){
    
    const [selectedWeapon, setSelectedWeapon] = useState('');

    return (
        <SelectionContext.Provider value={{
            selectedWeapon,
            setSelectedWeapon,
        }}>
            {children}
        </SelectionContext.Provider>
    )
}
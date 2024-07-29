import { useState } from 'react';
import '../style/Header.css';
import { FaSun } from 'react-icons/fa';
import { FaMoon } from 'react-icons/fa';

function Header({appRef}){

    const [theme, setTheme] = useState('light');

    function handleChangeTheme(){
        if(theme === 'light'){
            setTheme('dark');
        }else{
            setTheme('light');
        }

        appRef.current.classList.toggle('dark');
    }

    return (
        <div className='Header'>
            <h1 className='Header__logo'>TODO</h1>
            <div className='theme-btn' onClick={handleChangeTheme}>
                {theme === 'light' ? <FaMoon size='2em'/> : <FaSun size='2em' />}
            </div>
        </div>
    )
}

export default Header;
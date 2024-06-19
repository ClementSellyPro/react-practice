import '../style/Header.css';
import moonIcon from '../images/icon-moon.svg';
import sunIcon from '../images/icon-sun.svg';
import { useState } from 'react';

function Header(){

    const [theme, setTheme] = useState('light');

    function handleThemeClick(){
        if(theme === 'light'){
            setTheme('dark');
        }else{
            setTheme('light');
        }
    }

    return (
        <div className='Header'>
            <h1>TODO</h1>
            <img onClick={handleThemeClick} 
            className='theme-icon' 
            src={theme === 'dark' ? sunIcon : moonIcon} alt='themeIcon'>   
            </img>
        </div>
    )
}

export default Header;
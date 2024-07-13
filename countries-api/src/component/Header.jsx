import '../style/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
 
function Header(){
    const [theme, setTheme] = useState('light');

    function handleThemeTogle(){
        if(theme === 'light'){
            setTheme('dark');
        }else{
            setTheme('light');
        }
    }

    return (
        <div className='Header'>
            <h1 className='Header__title'>Where in the world?</h1>
            <div className='Header__theme-section' onClick={handleThemeTogle}>
                <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} size='xl'/>
                <p>Dark Mode</p>
            </div>
        </div>
    );
}

export default Header;
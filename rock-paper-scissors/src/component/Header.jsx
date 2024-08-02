import '../style/Header.css';
import logo from '../images/logo.svg';
import Score from './Score';

function Header(){
    return (
        <div className='Header'>
            <img src={logo} alt='Logo' />
            <Score />
        </div>
    );
}

export default Header;
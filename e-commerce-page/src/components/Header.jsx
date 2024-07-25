import '../style/Header.css';
import logo from '../images/logo.svg';
import avatar from '../images/image-avatar.png';
import Cart from './Cart';

function Header(){

    // add visible decoration on active page link
    function handleNavClick(e){
        let allLinks = e.target.parentElement.childNodes;
        allLinks.forEach(value => {
            if(value.classList.contains('selected')){
                value.classList.remove('selected');
            }
        })
        e.target.classList.add('selected');
    }

    return (
        <div className='Header'>
            <img className='logo' src={logo} alt='Logo' />
            <nav>
                <ul>
                    <li onClick={handleNavClick}>Collections</li>
                    <li onClick={handleNavClick}>Men</li>
                    <li onClick={handleNavClick}>Women</li>
                    <li onClick={handleNavClick}>About</li>
                    <li onClick={handleNavClick}>Contact</li>
                </ul>
            </nav>
            <div className='user-section'>
                <Cart />
                <img className='avatar' src={avatar} alt='Avatar' />
            </div>
        </div>
    )
}

export default Header;
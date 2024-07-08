import '../style/NavBar.css';
import logo from '../images/logo.svg';

function NavBar(){
    return (
        <div className='NavBar'>
            <div className='link-section'>
                <img className='logo' src={logo} alt='Logo' />
                <ul className='links'>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Ressources</li>
                </ul>
            </div>
            <div className='login-section'>
                <button type='button' className='login-btn'>Login</button>
                <button type='button' className='signup-btn'>Sign Up</button>
            </div>
        </div>
    );
}

export default NavBar;
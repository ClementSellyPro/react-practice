import '../style/Footer.css';
import logo from '../images/logo.svg';
import facebook from '../images/icon-facebook.svg';
import instagram from '../images/icon-instagram.svg';
import pinterest from '../images/icon-pinterest.svg';
import twitter from '../images/icon-twitter.svg';

function Footer(){
    return (
        <div className='Footer'>

            <img className='logo-inverted' src={logo} alt='Logo' />
            
            <div className='list-section'>
                <ul className='list'>
                    <li className='list-title'>Features</li>
                    <li className='list-item'>Link Shortening</li>
                    <li className='list-item'>Branded Links</li>
                    <li className='list-item'>Analytics</li>
                </ul>
                
                <ul className='list'>
                    <li className='list-title'>Ressources</li>
                    <li className='list-item'>Blog</li>
                    <li className='list-item'>Developers</li>
                    <li className='list-item'>Support</li>
                </ul>
                
                <ul className='list'>
                    <li className='list-title'>Company</li>
                    <li className='list-item'>About</li>
                    <li className='list-item'>Our Team</li>
                    <li className='list-item'>Careers</li>
                    <li className='list-item'>Contact</li>
                </ul>
            </div>

            <div className='social-media-section'>
                <ul className='social-media-list'> 
                    <li><img src={facebook} alt='facebook icon' /></li>
                    <li><img src={twitter} alt='twitter icon' /></li>
                    <li><img src={pinterest} alt='pinterest icon' /></li>
                    <li><img src={instagram} alt='instagram icon' /></li>
                </ul>
            </div>
                
        </div>
    );
}

export default Footer;
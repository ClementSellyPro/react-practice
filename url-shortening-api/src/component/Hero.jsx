import '../style/Hero.css';
import illustration from '../images/illustration-working.svg';
import Button from '../UI/Button';

function Hero(){
    return (
        <div className='Hero'>
            <div className='hero-text-section'>
                <h1 className='hero-title'>More than just shorter links</h1>
                <p className='hero-paragraph'>
                    Build your brand's recognition and get detailed
                    insights on how your links are performing.
                </p>
                <Button>Get Started</Button>
            </div>
            <img src={illustration} alt='Hero Illustration' />
        </div>
    );
}

export default Hero;
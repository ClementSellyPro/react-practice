import '../style/Button.css';

function Button({children}){
    return (
        <div className='Button'>
            <button type='button' className='primary-btn'>{children}</button>
        </div>
    );
}

export default Button;
import '../style/Input.css';

function Input(){
    return (
        <div className='Input'>
            <div className='input-contain'>
                <input type='text' className='input-user'/>
                <button className='shorten-btn'>Shorten it!</button>
            </div>
            <p className='alert-message'>Please add a link</p>
        </div>
    );
}

export default Input;
import { useState } from 'react';
import '../style/Input.css';

function Input({setResultlist}){

    const [userInput, setUserInput] = useState('');

    function handleInput(e){
        setUserInput(e.target.value);
    }

    function handleSubmit(){
        fetch('https://cleanuri.com/api/v1/shorten', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: userInput
        }).then((res) => res.text())
        .then(data => console.log(data))
    }

    return (
        <div className='Input'>
            <div className='input-contain'>
                <input type='text' className='input-user' onChange={handleInput}/>
                <button className='shorten-btn' onClick={handleSubmit}>Shorten it!</button>
            </div>
            <p className='alert-message'>Please add a link</p>
        </div>
    );
}

export default Input;
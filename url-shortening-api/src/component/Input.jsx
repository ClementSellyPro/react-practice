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
            mode:"no-cors",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(encodeURIComponent(userInput))
        }).then(res => console.log("RESSSS ", res))
        .then(data => console.log('DATAAAAA ',data))
        .catch(error => console.log(error));
    }
// curl -XPOST -d 'url=https%3A%2F%2Fgoogle.com%2F' 'https://cleanuri.com/api/v1/shorten'
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
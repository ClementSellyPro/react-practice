import '../style/Result.css';
import { Link } from "react-router-dom";

function Result({result}){

    return (
        <div className="Result">
            <h1 className="Result__title">{result}</h1>
            <Link to='/' ><button className="Result__btn">PLAY AGAIN</button></Link>
        </div>
    )
} 

export default Result;
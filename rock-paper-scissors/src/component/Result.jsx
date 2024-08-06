import '../style/Result.css';
import { Link } from "react-router-dom";

function Result(){
    return (
        <div className="Result">
            <h1 className="Result__title">YOU WIN</h1>
            <Link><button className="Result__btn">PLAY AGAIN</button></Link>
        </div>
    )
}

export default Result;
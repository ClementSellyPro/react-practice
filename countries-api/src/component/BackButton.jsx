import "../style/BackButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function BackButton(){
    return (
        <div className="BackButton">
            <FontAwesomeIcon icon={faArrowLeft} />
            Back
        </div>
    )
}

export default BackButton;
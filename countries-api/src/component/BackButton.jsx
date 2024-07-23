import "../style/BackButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function BackButton(){
    return (
        <NavLink to={'/'}>
            <div className="BackButton">
                <FontAwesomeIcon icon={faArrowLeft} />
                Back
            </div>
        </NavLink>
    )
}

export default BackButton;
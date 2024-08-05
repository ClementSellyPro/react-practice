import { useContext } from "react";
import SelectionContext from "../context/Selection.context";
import Circle from "../component/Circle";
// style regroup in app.css

function PageVersus(){

    const {selectedWeapon} = useContext(SelectionContext);

    return (
        <div className="versus-section">
            <div className="versus-section__picked">
                <h1 className="picked-title">YOU PICKED</h1>
                <Circle weapon={selectedWeapon} />
                <div className="versus-background"></div>
            </div>
            
            <div className="versus-section__picked">
                <h1 className="picked-title">THE HOUSE PICKED</h1>
                <Circle />
                <div className="versus-background"></div>
            </div>
        </div>
    )
}

export default PageVersus;
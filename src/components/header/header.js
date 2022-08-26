import KleverGate from '../assets/klever-gate.svg'
import "./header.css"

function Header() {
    return (
        <div className="container-header">
            <div className="info-header">
                <img alt={"logo"} src={KleverGate} height={"100%"}></img>
            </div>
        </div> 
    )
}

export default Header;
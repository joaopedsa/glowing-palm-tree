import { useNavigate } from "react-router-dom";
import Button from "../../components/button/button";
import Header from "../../components/header/header";

import "./initial.css"

function Initial() {
    const navigate = useNavigate()
    
    const handlePlans = (e) => {
        navigate("/plans")
    }
    
    return (
    <>
        <Header />
        <div>
            <Button handleClick={() => handlePlans()} name={"Plans"}></Button>
        </div>
    </>
    )
}

export default Initial;
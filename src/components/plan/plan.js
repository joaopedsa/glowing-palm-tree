import Button from "../button/button"
import { useNavigate } from 'react-router-dom';

import "./plan.css"

function Plan(props) {
    const navigate = useNavigate();

    const handleClickPlan = (e) => {
        navigate('/payment');
    }
    
    return (
        <div className="container-plan">
            <div>
                <div className="title-1-plan">
                    {props.title}
                </div>
                <div className="subtitle-1-plan">
                    {props.subtitle}
                </div>
            </div>
            <div className="info-plan">
                R${props.value}
            </div>
            <div className="line"></div>
            <div className="container-info-plan">
                <div className="info-plan">
                    {props.rateLimit} Rate Limit
                </div>
            </div>
            <Button name={"Sign Plan"} handleClick={() => handleClickPlan()}/>
        </div>
    )
}

export default Plan;
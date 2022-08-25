import Button from "../button/button"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addPlan } from '../../store/actions/choicePlan';

import "./plan.css"

function Plan(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSignPlan = () => {
        const plan = {
            id: props.id,
            title: props.title,
            subTitle: props.subTitle,
            value: props.value
        }
        dispatch(addPlan(plan))
        navigate('/payment');
    }
    
    return (
        <div className="container-plan">
            <div>
                <div className="title-1-plan">
                    {props.title}
                </div>
                <div className="subtitle-1-plan">
                    {props.subTitle}
                </div>
            </div>
            <div className="info-plan">
                {props.value} KLV
            </div>
            <div className="line"></div>
            <div className="container-info-plan">
                <div className="info-plan">
                    {props.rateLimit}/Requests Per Month
                </div>
            </div>
            <Button name={"Sign Plan"} handleClick={() => handleSignPlan()}/>
        </div>
    )
}

export default Plan;
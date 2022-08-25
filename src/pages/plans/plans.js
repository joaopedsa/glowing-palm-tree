import Header from "../../components/header/header";
import Plan from "../../components/plan/plan";
import { connect } from 'react-redux';

import "./plans.css"


const mapState = (state) => ({
    plans: state.plans,
})
const connector = connect(mapState)

function Plans(props) {
    return (
        <>
            <Header />
            <div className="container-plans">
                {props.plans.map(plan => (
                    <Plan key={"KEY-" + plan.id} id={plan.id} title={plan.title} subTitle={plan.subTitle} rateLimit={plan.rateLimit} value={plan.value}/>                  
                ))}
            </div>
        </>
)
}

export default connector(Plans);
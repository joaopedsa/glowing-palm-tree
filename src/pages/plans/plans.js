import Header from "../../components/header/header";
import Plan from "../../components/plan/plan";

import "./plans.css"

function Plans() {
return (
    <>
        <Header />
        <div className="container-plans">
            <Plan title={"Basic"} subtitle={"The basics for individuals and organizations"} rateLimit={"10,000"} value={"10,000"}/>
            <Plan title={"Enterprise"} subtitle={"The basics for individuals and organizations"} rateLimit={"100,000"} value={"100,000"}/>
        </div>
    </>
)
}

export default Plans;
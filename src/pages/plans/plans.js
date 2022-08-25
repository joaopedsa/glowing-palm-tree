import Header from "../../components/header/header";
import Plan from "../../components/plan/plan";
import "./plans.css"

function Plans() {
return (
    <body>
        <Header />
        <div className="container-plans">
            <Plan title={"Basic"} subtitle={"The basics for individuals and organizations"} rateLimit={"1.000"} value={"100"}/>
            <Plan title={"Medium"} subtitle={"The basics for individuals and organizations"} rateLimit={"100.000"} value={"1000"}/>
            <Plan title={"Enterprise"} subtitle={"The basics for individuals and organizations"} rateLimit={"Custom"} value={"X"}/>
        </div>
    </body>
)
}

export default Plans;
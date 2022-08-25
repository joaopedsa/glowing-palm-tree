import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/button";

function CreditForm() {
    const navigate = useNavigate()
    const handlePayPlan = (e) => {
        navigate("/confirm-payment")
    }

   return (
    <div id="credit-form">
        <label>Name <input type="name" /></label>
        <label>Number <input type="name" /></label>
        <label>Due date <input type="name" /></label>
        <label>Code <input type="name" /></label>
        <Button handleClick={() => handlePayPlan()} name={"Pagar"} className="plan-button"></Button>
    </div>)
}

export default CreditForm;

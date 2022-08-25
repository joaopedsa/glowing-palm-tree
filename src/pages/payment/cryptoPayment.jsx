import React from "react";
import QRCode from "react-qr-code";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/button";

import { connect } from 'react-redux';

const mapState = (state) => ({
    payment: state.payment,
    choicePlan: state.choicePlan
})
const connector = connect(mapState)

function CryptoPayment(props) {
    const navigate = useNavigate()

    const handlePayPlan = (e) => {
        // Request to Generate new API
        navigate("/confirm-payment")
    }

   return (
    <div id="qr-container">
        <h3>0x71237217317284123912931</h3>
        <QRCode value="Teste"></QRCode>
        <div className="button-payment">
            <Button handleClick={() => handlePayPlan()} name={"Pagar"} className="plan-button"></Button>
        </div>
    </div>      
    )
}

export default connector(CryptoPayment);

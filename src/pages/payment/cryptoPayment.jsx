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
        console.log(props.payment)
        console.log(props.choicePlan)
        // Request to Generate new API
        navigate("/confirm-payment")
    }

   return (
    <div id="qr-container">
        <h3>klv1d68673pkfqs2xx8s2qsm0hsyusrx6njjmqrfddwupxkk2022t86qtxyw55</h3>
        <QRCode value="klv1d68673pkfqs2xx8s2qsm0hsyusrx6njjmqrfddwupxkk2022t86qtxyw55"></QRCode>
        <div className="button-payment">
            <Button handleClick={() => handlePayPlan()} name={"Pay"} className="plan-button"></Button>
        </div>
    </div>      
    )
}

export default connector(CryptoPayment);

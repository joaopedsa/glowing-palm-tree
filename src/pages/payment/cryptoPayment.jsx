import React from "react";
import QRCode from "react-qr-code";
import { useNavigate } from "react-router-dom";
import { addApiKey } from "../../store/actions/apikey";
import Button from "../../components/button/button";
import axios from "axios";

import { connect, useDispatch } from 'react-redux';

const mapState = (state) => ({
    payment: state.payment,
    choicePlan: state.choicePlan
})
const connector = connect(mapState)

function CryptoPayment(props) {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handlePayPlan = async (e) => {
        const body = {
            email: props.payment.user.email,
            alias: props.payment.user.apiKeyName,
            planId: props.choicePlan.plan.id.toString(),
        }
        const { data } = await axios.post("http://localhost:8080/v1/api-key/create", body)
        dispatch(addApiKey(data.value))
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

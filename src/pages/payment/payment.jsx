import { connect, useDispatch } from 'react-redux';
import React from "react";
import Select from "react-select";
import CryptoPayment from "./cryptoPayment";
import CreditForm from "./creditForm";
import Header from "../../components/header/header";
import { addPaymentMethods, addPaymentUser } from "../../store/actions/payment";

import "./payment.css";

const mapState = (state) => ({
    payment: state.payment,
    choicePlan: state.choicePlan
})
const connector = connect(mapState)

const methodOptions = [
    { value: "crypto", label: "Crypto" },
    { value: "creditCard", label: "Credit Card"}
];

function Payment(props) {
    const dispatch = useDispatch()

    const handleChangeUser = (e) => {
        const newUsers = props.payment.user
        newUsers[e.target.name] = e.target.value
        dispatch(addPaymentUser(newUsers))
    } 

    const handleChangePaymentMethod = (e) => {
        const newMethod = e.value
        dispatch(addPaymentMethods(newMethod))
    }

    return (
    <>
        <Header />
        <div className="payment-container">
            <div className="selector-container">
                    <div className="api-form">
                        <label>E-mail<input type="email" value={props.payment.user.email} name={"email"} onChange={handleChangeUser}/></label>
                        <label>Name of your API KEY<input type="apiName" value={props.payment.user.apiKeyName} name={"apiKeyName"} onChange={handleChangeUser}/></label>
                    </div>
                    <Select
                        options={methodOptions}
                        onChange={(e) => handleChangePaymentMethod(e)}
                        defaultValue={{value: props.payment.method, label: "Crypto"}}/>

            </div>
            <div className="options-container">
                {props.payment.method === "crypto" ?
                <CryptoPayment/> :
                <CreditForm/>
                }
            </div>
        </div>
    </>
    )
}

export default connector(Payment);
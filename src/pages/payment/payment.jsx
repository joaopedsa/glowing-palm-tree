import React, { useState} from "react";
import Select from "react-select";
import CryptoPayment from "./cryptoPayment";
import CreditForm from "./creditForm";
import "./payment.css";

function Payment(props) {
    const [option, setOption] = useState("crypto")
    const methodOptions = [{
        value: "crypto", label: "Crypto"
    },
    {value: "creditCard", label: "Credit Card"}];

    const handleChange = ({value}) => {
        setOption(value);
    }

return (
<body>
    <div className="payment-container">
        <div className="selector-container">
                <Select options={methodOptions} onChange={handleChange}/>

        </div>
        <div className="options-container">
            {option == "crypto" ?
            <CryptoPayment/> :
            <CreditForm/>
            }
            <div>
                <button>Pagar</button>
            </div>
        </div>
    </div>
</body>)
}

export default Payment;
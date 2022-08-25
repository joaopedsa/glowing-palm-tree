import { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import Header from '../../components/header/header';

import "./confirm-payment.css";

function ConfirmPayment(props) {

    const [alreadyPay, setAlreadyPay] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setAlreadyPay(true)
        }, 5000)
    }, [])

    return (
        <>
            <Header />
            <div className='container-confirm-payment'>
                { alreadyPay ? 
                    <div>
                        <strong> API KEY: </strong>
                        872ae659-cbf5-4401-8984-895ebe90a11c
                    </div>
                : 
                    <>
                        <ReactLoading type={"spin"} color={"#82218f"} height={"100px"} width={"100px"}></ReactLoading>
                        <div style={{ marginTop: "10px" }}> Waiting Payment... </div>
                    </>
                }
            </div>
        </>
    )
}

export default ConfirmPayment
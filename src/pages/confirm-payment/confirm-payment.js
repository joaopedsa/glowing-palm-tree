import { connect } from 'react-redux';

import { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import Header from '../../components/header/header';
import { ContentPaste } from '@mui/icons-material';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import "./confirm-payment.css";

const mapState = (state) => ({
    apikey: state.apikey,
})
const connector = connect(mapState)

function ConfirmPayment(props) {
    const [alreadyPay, setAlreadyPay] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setAlreadyPay(true)
        }, 5000)
    }, []);

    return (
        <>
            <Header />
            <div className='container-confirm-payment'>
                { alreadyPay ? 
                    <div className="api-container">
                        <div className='container-apikey'>
                            <strong> API KEY: &nbsp;</strong>
                            {props.apikey.key}
                            <CopyToClipboard style={{marginLeft: "10px", cursor: "pointer"}} text={props.apikey}><ContentPaste/></CopyToClipboard>
                        </div>
                        <div className='container-warning'>
                            <div id="warning">Security Alert!</div>
                            <div> Your api key is for personal use, non-transferable and for security reasons we do not store</div>
                        </div>
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

export default connector(ConfirmPayment);
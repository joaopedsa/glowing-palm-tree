import React from "react";

function CryptoPayment() {
   return (
    <div id="qr-container">
        <div>
            <h3>0x71237217317284123912931</h3>
            <img src="https://www.cjf.jus.br/cjf/corregedoria-da-justica-federal/turma-nacional-de-uniformizacao/QRCODE.png/@@images/5b045579-9526-478a-9165-25a590ebab68.png" alt="" />
            <div>
                <button className="pay-button-qr">Pagar</button>
            </div>
        </div>
    </div>      
    )
}

export default CryptoPayment;

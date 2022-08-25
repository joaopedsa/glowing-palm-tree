import { BrowserRouter, Routes, Route } from "react-router-dom";


import Admin from "./admin/admin";
import Initial from './initial/initial';
import Plans from "./plans/plans";
import Payment from "./payment/payment";
import ConfirmPayment from "./confirm-payment/confirm-payment";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Initial/>} />
          <Route exact path="/admin" element={<Admin/>} /> 
          <Route exact path="/plans" element={<Plans/>} />
          <Route exact path="/payment" element={<Payment/>} />
          <Route exact path="/confirm-payment" element={<ConfirmPayment/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

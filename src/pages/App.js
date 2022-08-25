
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Initial from './initial/initial';
import Plans from "./plans/plans";
import Payment from "./payment/payment";
import Header from "../components/header/header";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Initial/>} />
          <Route exact path="/plans" element={<Plans/>} />
          <Route exact path="/payment" element={<Payment/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

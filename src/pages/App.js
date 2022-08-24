
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Initial from './initial/initial';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Initial/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

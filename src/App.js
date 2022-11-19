import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import Myjobs from "./components/Myjobs";
import MyPayment from "./components/MyPayment";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myjobs" element={<Myjobs />} />
          <Route path="/mypayment" element={<MyPayment />} />
          <Route path="/myofferletter" element={<Home />} />
          <Route path="/mycertificates" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

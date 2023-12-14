import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

import PageNotFound from "./Pages/PageNotFound";
import Form from "./Form/Form";
import AfterLogin from "./Pages/AfterLogin";


function App() {
  return (
    <>
    {/* <Home/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/login" element={<Form/>}></Route>
          <Route path="/signup" element={<Form/>}></Route>
          <Route path="/afterlogin" element={<AfterLogin></AfterLogin>}></Route>
          <Route path="*" element={<PageNotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

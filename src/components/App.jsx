import "bootstrap";
import Navbar from "./navbar/Navbar";
import About from "./About";
import Secret from "./Secret";
import Home from "./Home";
import Data from "./Data";
import Login from "./Login";
import Buy from "./Buy";
import Sell from "./Sell";
import MyStuff from "./MyStuff";
import Footer from "./objects/Footer";
import Demo from "./Demo";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    {/* <Route exact path="/" element={<Demo />} /> */}
                    <Route exact path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/secret" element={<Secret />} />
                    <Route path="/data" element={<Data />} />
                    <Route path="/buy" element={<Buy />} />
                    <Route path="/sell" element={<Sell />} />
                    <Route path="/mystuff" element={<MyStuff />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
};

export default App;

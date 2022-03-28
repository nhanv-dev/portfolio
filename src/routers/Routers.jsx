import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from '../pages/Home'
import Contact from '../pages/Contact'
function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routers;
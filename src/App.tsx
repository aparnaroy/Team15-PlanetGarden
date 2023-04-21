import React from "react";
import "./App.css";
// import { Col, Row } from "react-bootstrap";
// Components
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

// Images
import { Container } from "react-bootstrap";
import { Inventory } from "./pages/Inventory";
import { Shop } from "./pages/Shop";
import { About } from "./pages/About";

function App(): JSX.Element {
    return (
        <>
            <Navbar />
            <Container>
                <Routes>
                    <Route path="/inventory" element={<Inventory />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Container>
        </>
    );
}

export default App;

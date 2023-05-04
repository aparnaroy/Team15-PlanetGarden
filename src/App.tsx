import React from "react";
import "./App.css";
// Components
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Inventory } from "./pages/Inventory";
import { Shop } from "./pages/Shop";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Users } from "./pages/Users";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App(): JSX.Element {
    return (
        <>
            <DndProvider backend={HTML5Backend}>
                <Navbar />
                <Container>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/homepage" element={<Home />} />
                        <Route path="/inventory" element={<Inventory />} />
                        <Route path="/shop" element={<Shop />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/users" element={<Users />} />
                    </Routes>
                </Container>
            </DndProvider>
        </>
    );
}

export default App;

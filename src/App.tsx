import React from "react";
import "./App.css";
// import { Col, Row } from "react-bootstrap";
// Components
import { LandscapeItems } from "./components/Item";
import { DropDownMenu } from "./components/dropDownMenu";
import { DisplayAll } from "./components/components";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

// Images
import PlanetGarden from "./assets/Planet-Garden.png";
import { Container } from "react-bootstrap";
import { Inventory } from "./pages/Inventory";
import { Shop } from "./pages/Shop";
import { About } from "./pages/About";

function App(): JSX.Element {
    return (
        <>
            <Navbar />
            <Container className="mb-4">
                <Routes>
                    <Route path="/inventory" element={<Inventory />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/about" element={<About />} />
                </Routes>
                <div className="App">
                    <header className="App-header">Planet Garden🪴</header>
                    <img
                        src={PlanetGarden}
                        alt="The garden"
                        width="1200"
                        height="600"
                    ></img>
                    <div>
                        <h1>*DROP DOWN COMPONENT*</h1>
                        <DropDownMenu></DropDownMenu>
                    </div>
                    <header className="App-header2">Available Items</header>
                    <h5>
                        Emilie Barniak, Jillian Camp, Emma Frampton, Mikaylla
                        Haskins, Aparna Roy
                    </h5>
                    <p>CISC275</p>
                    <DisplayAll></DisplayAll>
                    <hr></hr>
                    <LandscapeItems></LandscapeItems>
                    <hr></hr>
                </div>
            </Container>
        </>
    );
}

export default App;

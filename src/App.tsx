import React from "react";
import "./App.css";
import PlanetGarden from "./Planet-Garden.png";
import { DisplayTrees } from "./components";
import { Col, Row } from "react-bootstrap";
import Oaktree from "./oaktree.png";
import Spruce from "./spruce-tree.png";
import Sequoia from "./Sequoia.png";
import Cedar from "./cedar-tree.png";
import Larch from "./larch-tree.png";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">Planet Garden🪴</header>
            <img
                src={PlanetGarden}
                alt="The garden"
                width="1320"
                height="580"
            ></img>
            <div>
                <h1>*DROP DOWN COMPONENT*</h1>
            </div>
            <header className="App-header2">Available Items</header>
            <div className="flex-container">
                <div>
                    <img
                        src={Oaktree}
                        alt="Oak tree"
                        width="270"
                        height="270"
                    ></img>
                </div>
                <div>
                    <img
                        src={Spruce}
                        alt="Oak tree"
                        width="270"
                        height="270"
                    ></img>
                </div>
                <div>
                    <img
                        src={Sequoia}
                        alt="Oak tree"
                        width="270"
                        height="270"
                    ></img>
                </div>
                <div>
                    <img
                        src={Cedar}
                        alt="Oak tree"
                        width="270"
                        height="270"
                    ></img>
                </div>
                <div>
                    <img
                        src={Larch}
                        alt="Oak tree"
                        width="270"
                        height="270"
                    ></img>
                </div>
            </div>
            <div className="flex-container">
                <div>Rose </div>
                <div>Daisy </div>
                <div>Lilly </div>
                <div>Orchid </div>
                <div>Tulip </div>
            </div>
            <Col> COLUMN </Col>
            <h5>
                Emilie Barniak, Jillian Camp, Emma Frampton, Mikaylla Haskins,
                Aparna Roy
            </h5>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <DisplayTrees></DisplayTrees>
        </div>
    );
}

export default App;

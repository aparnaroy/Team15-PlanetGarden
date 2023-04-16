import React from "react";
import "./App.css";
import { LandscapeItems } from "./components/Item";
import PlanetGarden from "./Planet-Garden.png";
import { DisplayTrees } from "./components";
import { Col, Row } from "react-bootstrap";
import Oaktree from "./oaktree.png";
import Spruce from "./spruce-tree.png";
import Sequoia from "./Sequoia.png";
import Cedar from "./cedar-tree.png";
import Larch from "./larch-tree.png";
import Pansy from "./Pansy.png";
import iris from "./iris.png";
import sunflower from "./Sunflower.png";
import Chrysanthemem from "./Chrysanthemum.png";
import Tulip from "./Tulip.png";

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
            <div className="parent-container">
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
                    <div>
                        <img
                            src={Pansy}
                            alt="Oak tree"
                            width="270"
                            height="270"
                        ></img>
                    </div>
                    <div>
                        <img
                            src={iris}
                            alt="Oak tree"
                            width="270"
                            height="270"
                        ></img>
                    </div>
                    <div>
                        <img
                            src={sunflower}
                            alt="Oak tree"
                            width="270"
                            height="270"
                        ></img>
                    </div>
                    <div>
                        <img
                            src={Chrysanthemem}
                            alt="Oak tree"
                            width="270"
                            height="270"
                        ></img>
                    </div>
                    <div>
                        <img
                            src={Tulip}
                            alt="Oak tree"
                            width="270"
                            height="270"
                        ></img>
                    </div>
                </div>
            </div>
            <h5>
                Emilie Barniak, Jillian Camp, Emma Frampton, Mikaylla Haskins,
                Aparna Roy
            </h5>
            <DisplayTrees></DisplayTrees>
            <hr></hr>
            <LandscapeItems></LandscapeItems>
        </div>
    );
}

export default App;

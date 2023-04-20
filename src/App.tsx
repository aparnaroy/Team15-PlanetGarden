import React from "react";
import "./App.css";
// import { Col, Row } from "react-bootstrap";
// Components
import { LandscapeItems } from "./components/Item";
import { DropDownMenu } from "./components/dropDownMenu";
import {
    DisplayTrees,
    DisplayFlowers,
    DisplayAll
} from "./components/components";

// Images
import PlanetGarden from "./assets/Planet-Garden.png";
import Oaktree from "./assets/oaktree.png";
import Spruce from "./assets/spruce-tree.png";
import Sequoia from "./assets/Sequoia.png";
import Cedar from "./assets/cedar-tree.png";
import Larch from "./assets/larch-tree.png";
import Pansy from "./assets/Pansy.png";
import iris from "./assets/iris.png";
import sunflower from "./assets/Sunflower.png";
import Chrysanthemem from "./assets/Chrysanthemum.png";
import Tulip from "./assets/Tulip.png";

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
                <DropDownMenu></DropDownMenu>
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
            <div className="user-container">hello</div>
            <h5>
                Emilie Barniak, Jillian Camp, Emma Frampton, Mikaylla Haskins,
                Aparna Roy
            </h5>
            <p>CISC275</p>
            <DisplayTrees></DisplayTrees>
            <DisplayFlowers></DisplayFlowers>
            <DisplayAll></DisplayAll>
            <hr></hr>
            <LandscapeItems></LandscapeItems>
            <hr></hr>
        </div>
    );
}

export default App;

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
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <hr></hr>
            <LandscapeItems></LandscapeItems>
        </div>
    );
}

export default App;

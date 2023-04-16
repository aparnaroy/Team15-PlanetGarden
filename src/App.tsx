import React from "react";
import "./App.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { RevealAnswer } from "./components/RevealAnswer";
import { PlanetGarden } from "./PlanetGarden";

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
            <RevealAnswer></RevealAnswer>
            <PlanetGarden></PlanetGarden>
        </div>
    );
}

export default App;

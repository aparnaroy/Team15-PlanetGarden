import React from "react";
//import { DisplayAll } from "../components/components";
import { LandscapeItems } from "../components/Item";

export function Inventory() {
    return (
        <div className="App">
            <header className="App-header">Inventory</header>
            <header className="App-header2">All Available Items</header>
            <br></br>
            <LandscapeItems></LandscapeItems>
            <hr></hr>
        </div>
    );
}

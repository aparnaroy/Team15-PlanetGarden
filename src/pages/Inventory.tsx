import React from "react";
import { DisplayAll } from "../components/components";

export function Inventory() {
    return (
        <div className="App">
            <header className="App-header">Inventory</header>
            <header className="App-header2">All Available Items</header>
            <br></br>
            <DisplayAll></DisplayAll>
            <hr></hr>
        </div>
    );
}

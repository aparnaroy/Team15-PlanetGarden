import React from "react";
import { InventoryDisplay } from "../components/DisplayItem";

export function Inventory() {
    return (
        <div className="App">
            <header className="App-header">Inventory</header>
            <br></br>
            <InventoryDisplay></InventoryDisplay>
            <hr></hr>
        </div>
    );
}

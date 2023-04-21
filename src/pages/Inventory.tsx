import React from "react";
import { DropDownMenu } from "../components/dropDownMenu";
import { DisplayAll } from "../components/components";
import PlanetGarden from "../assets/Planet-Garden.png";

export function Inventory() {
    return (
        <div className="App">
            <header className="App-header">Planet Garden🪴</header>
            <h1>Inventory</h1>
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
                Emilie Barniak, Jillian Camp, Emma Frampton, Mikaylla Haskins,
                Aparna Roy
            </h5>
            <p>CISC275</p>
            <DisplayAll></DisplayAll>
            <hr></hr>
        </div>
    );
}

import React from "react";
import { DropDownMenu } from "../components/dropDownMenu";
import { SortButton } from "../components/components";
import PlanetGarden from "../assets/Planet-Garden.png";

export function Shop() {
    return (
        <div className="App">
            <header className="App-header">Shop</header>
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
            <SortButton></SortButton>
            <hr></hr>
        </div>
    );
}

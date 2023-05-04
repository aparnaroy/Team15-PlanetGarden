import React from "react";
//import { SortButton } from "../components/components";
import PlanetGarden from "../assets/Planet-Garden.png";
import { SortButton } from "../components/SortItems";
import { Cart } from "../components/UserList";

export function Shop() {
    return (
        <div className="App">
            <header className="App-header">Shop</header>
            <div>
                <img
                    src={PlanetGarden}
                    alt="The garden"
                    width="1200"
                    height="600"
                ></img>
            </div>
            <br></br>
            <br></br>
            <header className="App-header2">Available Items</header>
            <SortButton></SortButton>
            <hr></hr>
        </div>
    );
}

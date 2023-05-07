import React from "react";
//import { SortButton } from "../components/components";
import PlanetGarden from "../assets/Planet-Garden.png";
import { SortDropDown } from "../components/SortItems";
//import { Cart } from "../components/UserList";

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
            <SortDropDown></SortDropDown>
            <hr></hr>
        </div>
    );
}

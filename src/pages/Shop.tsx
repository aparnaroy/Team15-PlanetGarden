import React from "react";
//import { SortButton } from "../components/components";
import { SortDropDown } from "../components/SortItems";
//import { Cart } from "../components/UserList";

export function Shop() {
    return (
        <div className="App">
            <header className="App-header">Shop</header>
            <br></br>
            <br></br>
            <SortDropDown></SortDropDown>
            <hr></hr>
        </div>
    );
}

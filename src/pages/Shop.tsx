import React from "react";
import { SortDropDown } from "../components/SortItems";

export function Shop() {
    return (
        <div className="App">
            <header className="App-header">Shop</header>
            <br></br>
            <div data-testid="sort-dropdown">
                <SortDropDown></SortDropDown>
            </div>
            <hr></hr>
        </div>
    );
}

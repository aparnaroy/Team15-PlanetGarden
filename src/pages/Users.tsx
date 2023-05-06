import React from "react";
//import { UserDropDownMenuSuper } from "../components/UserDropDownSuper";
import { UserSelect } from "../components/UserSelect";

export function Users() {
    return (
        <div className="App">
            <header className="App-header">Edit Users</header>
            <br></br>
            <UserSelect></UserSelect>
            <hr></hr>
        </div>
    );
}

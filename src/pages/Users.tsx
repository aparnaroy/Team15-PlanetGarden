import React from "react";
import { UserSelect } from "../components/UserSelect";

export function Users() {
    return (
        <div className="App">
            <header className="App-header">Edit Users</header>
            <br></br>
            <div data-testid="user-select">
                <UserSelect></UserSelect>
            </div>
            <br></br>
        </div>
    );
}

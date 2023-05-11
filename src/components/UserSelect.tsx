import React, { useEffect, useState } from "react";
import { Form, FormSelect } from "react-bootstrap";
import { useSessionStorage } from "../hooks/useSessionStorage";
import { User } from "../interfaces/User";

export function UserSelect(): JSX.Element {
    const [allUsers, setAllUsers] = useSessionStorage<User[]>("USERS", [
        { id: 1, name: "Sam", cart: [] },
        { id: 2, name: "John", cart: [] },
        { id: 3, name: "Sarah", cart: [] },
        { id: 4, name: "Bob", cart: [] }
    ]);

    const [selectedUserId, setSelectedUserId] = useSessionStorage<number>(
        "selected",
        0
    );

    const [newUserName, setNewUserName] = useState<string>("");

    const userSelectedID = sessionStorage.getItem("CurrentUserID");

    useEffect(() => {
        if (userSelectedID) {
            setSelectedUserId(selectedUserId);
        }
    }, [selectedUserId]);

    // This is the Control
    function updateUserSelected(e: number) {
        setSelectedUserId(e);
        sessionStorage.setItem("CurrentUserID", JSON.stringify(e));
        location.reload();
    }

    const handleAddUser = () => {
        const newUser = {
            id: Date.now(),
            name: newUserName,
            cart: []
        };
        setAllUsers([...allUsers, newUser]);
        setNewUserName("");
        location.reload();
    };

    const handleDeleteUser = (userId: number) => {
        setAllUsers(allUsers.filter((user) => user.id !== userId));
    };

    function labelSelected(id: number) {
        if (selectedUserId === id) {
            return (
                <span
                    style={{
                        marginLeft: "10px",
                        fontWeight: "bold"
                    }}
                >
                    (selected)
                </span>
            );
        }
    }

    function superDisplay() {
        if (
            sessionStorage.getItem("Role") === "Super" &&
            window.location.href.endsWith("users")
        ) {
            return (
                <div>
                    <h1 style={{ display: "flex" }}>All Users</h1>
                    {allUsers.map((user) => {
                        return (
                            <div
                                key={user.id}
                                style={{
                                    display: "flex",
                                    alignItems: "center"
                                }}
                            >
                                <li>
                                    {user.name}
                                    {<>&nbsp;&nbsp;&nbsp;&nbsp;</>}

                                    <button
                                        onClick={() =>
                                            handleDeleteUser(user.id)
                                        }
                                    >
                                        Delete
                                    </button>

                                    {<>&nbsp;</>}
                                    {labelSelected(user.id)}
                                </li>
                                <br></br>
                                <br></br>
                            </div>
                        );
                    })}
                    <div>
                        <br></br>
                        <input
                            className="w-100"
                            type="text"
                            placeholder="Enter New User"
                            value={newUserName}
                            onChange={(e) => setNewUserName(e.target.value)}
                            onKeyPress={(e) => {
                                if (e.key === "Enter") {
                                    handleAddUser();
                                }
                            }}
                        />
                        <br></br>
                        <br></br>
                        <button onClick={handleAddUser}>Save</button>
                    </div>
                </div>
            );
        }
    }

    function userDisplay() {
        if (sessionStorage.getItem("Role") === "User") {
            return (
                <div>
                    <Form.Group controlId="The_Users">
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center"
                            }}
                        >
                            User:{<>&nbsp;</>}
                            <FormSelect
                                value={selectedUserId ?? ""}
                                onChange={(event) =>
                                    updateUserSelected(
                                        parseInt(event.target.value)
                                    )
                                }
                            >
                                {allUsers.map((user) => {
                                    return (
                                        <option key={user.id} value={user.id}>
                                            {user.name}
                                        </option>
                                    );
                                })}
                            </FormSelect>
                        </div>
                    </Form.Group>
                </div>
            );
        }
    }

    function redirect() {
        if (
            (sessionStorage.getItem("Role") === "User" &&
                window.location.href.endsWith("users")) ||
            (sessionStorage.getItem("Role") === "Admin" &&
                window.location.href.endsWith("users"))
        ) {
            location.hash = "/";
            location.reload();
        }
        return <></>;
    }

    function redirect2() {
        if (
            sessionStorage.getItem("Role") === "User" &&
            window.location.href.endsWith("item")
        ) {
            location.hash = "/";
            location.reload();
        }
        return <></>;
    }

    return (
        <div>
            {redirect()}
            {redirect2()}
            {superDisplay()}
            {userDisplay()}
        </div>
    );
}

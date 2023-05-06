import React, { useState } from "react";
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
    const [selectedUserId, setSelectedUserId] = useSessionStorage<
        number | null
    >("selected", null);
    const [newUserName, setNewUserName] = useState<string>("");

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
                        <FormSelect
                            value={selectedUserId ?? ""}
                            onChange={(e) =>
                                setSelectedUserId(parseInt(e.target.value))
                            }
                        >
                            <option value="">Select User</option>
                            {allUsers.map((user) => {
                                return (
                                    <option key={user.id} value={user.id}>
                                        {user.name}
                                    </option>
                                );
                            })}
                        </FormSelect>
                    </Form.Group>
                </div>
            );
        }
    }

    return (
        <div>
            {superDisplay()}
            {userDisplay()}
        </div>
    );
}

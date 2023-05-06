/* eslint-disable no-extra-parens */
import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { useSessionStorage } from "../hooks/useSessionStorage";

type User = string;

export function UserDropDownMenuSuper(): JSX.Element {
    const [users, setUsers] = useSessionStorage<User[]>("users", []);
    const [selectedUser, setSelectedUser] = useState<string>("");
    const [newUser, setNewUser] = useState<string>("");
    const [showAddUser, setShowAddUser] = useState<boolean>(false);

    useEffect(() => {
        if (users.length > 0) {
            setSelectedUser(users[0]);
        }
    }, [users]);

    function updateUser(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelectedUser(event.target.value);
    }

    function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
        if (
            event.key === "Enter" &&
            users.length < 10 &&
            newUser.trim() !== ""
        ) {
            setUsers([...users, newUser]);
            setSelectedUser(newUser);
            setNewUser("");
        }
    }

    function handleAddUser() {
        if (newUser.trim() !== "") {
            setUsers([...users, newUser]);
            setSelectedUser(newUser);
            setNewUser("");
        } else {
            setShowAddUser(true);
        }
    }

    function handleDeleteUser(userToDelete: User) {
        const userIndex = users.indexOf(userToDelete);
        if (userIndex !== -1) {
            const updatedUsers = [...users];
            updatedUsers.splice(userIndex, 1);
            setUsers(updatedUsers);
            if (selectedUser === userToDelete) {
                setSelectedUser("");
            }
        }
    }

    const userList = ["", ...users];

    return (
        <div>
            <Form.Group controlId="The_Users">
                <div style={{ display: "flex", alignItems: "center" }}>
                    User:{<>&nbsp;</>}
                    <Form.Select value={selectedUser} onChange={updateUser}>
                        {userList.map((user, index) => {
                            return (
                                <option key={index} value={user}>
                                    {user}
                                </option>
                            );
                        })}
                    </Form.Select>
                    {selectedUser === "" && !showAddUser && (
                        <button onClick={() => setShowAddUser(true)}>
                            Add User
                        </button>
                    )}
                    {showAddUser && (
                        <>
                            <input
                                type="text"
                                placeholder="Enter new user"
                                value={newUser}
                                onChange={(event) =>
                                    setNewUser(event.target.value)
                                }
                                onKeyPress={handleKeyPress}
                            />
                            <button onClick={handleAddUser}>Save</button>
                        </>
                    )}
                </div>
            </Form.Group>
            {users.map((user, index) => {
                if (sessionStorage.getItem("Role") === "Super") {
                    return (
                        <div
                            key={index}
                            style={{ display: "flex", alignItems: "center" }}
                        >
                            <div>{user}</div>
                            <button onClick={() => handleDeleteUser(user)}>
                                Delete
                            </button>
                        </div>
                    );
                }
            })}
        </div>
    );
}

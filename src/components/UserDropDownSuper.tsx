/* eslint-disable no-extra-parens */
import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

export function UserDropDownMenuSuper(): JSX.Element {
    const [selectedUser, setSelectedUser] = useState<string>("");
    const [newUsers, setNewUsers] = useState<string[]>([]);
    const [newUser, setNewUser] = useState<string>("");
    const [showAddUser, setShowAddUser] = useState<boolean>(false);

    useEffect(() => {
        const savedUsers = sessionStorage.getItem("users");
        if (savedUsers) {
            setNewUsers(JSON.parse(savedUsers));
        } else {
            setNewUsers([]);
        }
    }, []);

    useEffect(() => {
        sessionStorage.setItem("users", JSON.stringify(newUsers));
    }, [newUsers]);

    function updateUser(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelectedUser(event.target.value);
    }

    function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
        if (
            event.key === "Enter" &&
            newUsers.length < 10 &&
            newUser.trim() !== ""
        ) {
            setNewUsers([...newUsers, newUser]);
            setSelectedUser(newUser);
            setNewUser("");
        }
    }

    function handleAddUser() {
        if (newUser.trim() !== "") {
            setNewUsers([...newUsers, newUser]);
            setSelectedUser(newUser);
            setNewUser("");
        } else {
            setShowAddUser(true);
        }
    }

    function handleDeleteUser(userToDelete: string) {
        const userIndex = newUsers.indexOf(userToDelete);
        if (userIndex !== -1) {
            const updatedUsers = [...newUsers];
            updatedUsers.splice(userIndex, 1);
            setNewUsers(updatedUsers);
            if (selectedUser === userToDelete) {
                setSelectedUser("");
            }
        }
    }

    const users = ["", "Sam", "John", "Sarah", ...newUsers];

    return (
        <div>
            <Form.Group controlId="The_Users">
                <div style={{ display: "flex", alignItems: "center" }}>
                    User:{<>&nbsp;</>}
                    <Form.Select value={selectedUser} onChange={updateUser}>
                        {users.map((user, index) => {
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
            {newUsers.map((user, index) => {
                if (sessionStorage.getItem("Role") === "Super") {
                    return (
                        <div
                            key={index}
                            style={{ display: "flex", alignItems: "center" }}
                        >
                            <div>{user}</div>
                            <button onClick={() => handleDeleteUser(user)}>
                                Delete User
                            </button>
                            {user === selectedUser && (
                                <span
                                    style={{
                                        marginLeft: "10px",
                                        fontWeight: "bold"
                                    }}
                                >
                                    (selected)
                                </span>
                            )}
                        </div>
                    );
                }
                return null;
            })}
        </div>
    );
}

export default UserDropDownMenuSuper;

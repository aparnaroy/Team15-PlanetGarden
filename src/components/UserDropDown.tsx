import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function UserDropDownMenu(): JSX.Element {
    const [selectedUser, setSelectedUser] = useState<string>("");
    const [newUsers, setNewUsers] = useState<string[]>([]);
    const [newUser, setNewUser] = useState<string>("");

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

    const users = ["", "Sam", "Sarah", "John", ...newUsers];

    return (
        <div>
            <Form.Group controlId="The_Users">
                <div style={{ display: "flex", alignItems: "center" }}>
                    User:
                    <Form.Select value={selectedUser} onChange={updateUser}>
                        {users.map((user, index) => (
                            <option key={index} value={user}>
                                {user}
                            </option>
                        ))}
                    </Form.Select>
                    {selectedUser === "" && (
                        <input
                            type="text"
                            placeholder="Enter new user"
                            value={newUser}
                            onChange={(event) => setNewUser(event.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                    )}
                </div>
            </Form.Group>
        </div>
    );
}

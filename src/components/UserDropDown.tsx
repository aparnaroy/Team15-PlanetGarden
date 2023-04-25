import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function UserDropDownMenu(): JSX.Element {
    const [selectedRole, setSelectedRole] = useState<string>("");

    const [newRole, setNewRole] = useState<string>("");

    function updateRole(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelectedRole(event.target.value);
    }

    function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === "Enter" && newRole.trim() !== "") {
            setSelectedRole(newRole);
            setNewRole("");
        }
    }

    const roles = ["", "Sam", "Sarah", "John", newRole];

    return (
        <div>
            <Form.Group controlId="The_Roles">
                <div style={{ display: "flex", alignItems: "center" }}>
                    Role:
                    <Form.Select value={selectedRole} onChange={updateRole}>
                        {roles.map((role, index) => (
                            <option key={index} value={role}>
                                {role}
                            </option>
                        ))}
                    </Form.Select>
                    {selectedRole === newRole && (
                        <input
                            type="text"
                            placeholder="Enter new role"
                            value={newRole}
                            onChange={(event) => setNewRole(event.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                    )}
                </div>
            </Form.Group>
        </div>
    );
}

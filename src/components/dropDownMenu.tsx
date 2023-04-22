import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function DropDownMenu(): JSX.Element {
    // This is the State (Model)
    const [role, setRole] = useState<string>(" ");

    // This is the Control
    function updateRole(event: React.ChangeEvent<HTMLSelectElement>) {
        setRole(event.target.value);
    }

    // This is the View
    return (
        <div>
            <Form.Group controlId="The_Roles">
                <Form.Label>Role Select</Form.Label>
                <Form.Select
                    placeholder={"Role Select"}
                    value={role}
                    onChange={updateRole}
                >
                    <option value="Super">Super</option>
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                </Form.Select>
            </Form.Group>
            You have selected {role}.
        </div>
    );
}

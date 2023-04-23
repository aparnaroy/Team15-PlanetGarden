import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function DropDownMenu(): JSX.Element {
    // This is the State (Model)
    const [role, setRole] = useState<string>("User");

    // This is the Control
    function updateRole(event: React.ChangeEvent<HTMLSelectElement>) {
        setRole(event.target.value);
    }

    // This is the View
    return (
        <div>
            <Form.Group controlId="The_Roles">
                <div
                    style={{
                        display: "flex",
                        alignItems: "center"
                    }}
                >
                    Role:
                    <Form.Select value={role} onChange={updateRole}>
                        <option value="Super">Super</option>
                        <option value="Admin">Admin</option>
                        <option value="User">User</option>
                    </Form.Select>
                </div>
            </Form.Group>
        </div>
    );
}

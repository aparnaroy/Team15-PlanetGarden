import React, { useState } from "react";
import { Form } from "react-bootstrap";

/*export function DropDownMenu(): JSX.Element {
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
}*/

export function RoleSelect(): JSX.Element {
    // This is the State (Model)
    const [role, setRole] = useState<string>("");

    const roleSelected = sessionStorage.getItem("Role");

    // This is the Control
    function updateRole(key: string) {
        setRole(key);
        sessionStorage.setItem("Role", key);
        location.reload();
    }

    // This is the View
    return (
        <div>
            <Form.Group>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center"
                    }}
                >
                    Role:
                    <Form.Select
                        value={role}
                        onChange={(event) => updateRole(event.target.value)}
                        key={role}
                    >
                        <option value="Super">Super</option>
                        <option value="Admin">Admin</option>
                        <option value="User">User</option>
                    </Form.Select>
                </div>
                Role is {roleSelected}
            </Form.Group>
        </div>
    );
}

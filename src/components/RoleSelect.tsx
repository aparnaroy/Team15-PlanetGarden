import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

export function RoleSelect(): JSX.Element {
    // This is the State (Model)
    const [role, setRole] = useState<string>("");

    const roleSelected = sessionStorage.getItem("Role");

    useEffect(() => {
        if (roleSelected) {
            setRole(roleSelected);
        }
    }, [roleSelected]);

    // This is the Control
    function updateRole(e: string) {
        setRole(e);
        sessionStorage.setItem("Role", e);
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
                    {<>&nbsp;&nbsp;&nbsp;</>}Role:{<>&nbsp;</>}
                    <Form.Select
                        value={role}
                        onChange={(event) => updateRole(event.target.value)}
                        key={role}
                    >
                        <option defaultValue="default">Select Your Role</option>
                        <option value="Super">Owner</option>
                        <option value="Admin">Shopkeeper</option>
                        <option value="User">Customer</option>
                    </Form.Select>
                </div>
            </Form.Group>
        </div>
    );
}

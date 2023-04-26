import React, { useEffect, useState } from "react";
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

/*export function RoleSelect(): JSX.Element {
    // This is the State (Model)
    const [role, setRole] = useState<string>("Super");
    sessionStorage.setItem("Role", JSON.stringify(role));

    const roleSelected = sessionStorage.getItem("Role");

    // This is the Control
    function updateRole(key: string) {
        setRole(key);
        sessionStorage.setItem("Role", key);
        location.reload();
    }

    const updateStorage = () => {
        sessionStorage.setItem("Role", JSON.stringify(role));
    };

    function updateRole(event: React.ChangeEvent<HTMLSelectElement>) {
        setRole(event.target.value);
        updateStorage();
        //sessionStorage.setItem("Role", JSON.stringify(event.target.value));
        location.reload();
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
                Role is {role}
            </Form.Group>
        </div>
    );
}*/

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
                    Role:
                    <Form.Select
                        value={role}
                        onChange={(event) => updateRole(event.target.value)}
                        key={role}
                    >
                        <option defaultValue="default">Select Your Role</option>
                        <option value="Super">Super</option>
                        <option value="Admin">Admin</option>
                        <option value="User">User</option>
                    </Form.Select>
                </div>
            </Form.Group>
        </div>
    );
}

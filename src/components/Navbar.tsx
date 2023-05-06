import React from "react";
import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
//import { UserDropDownMenuSuper } from "./UserDropDownSuper";
import { RoleSelect } from "./RoleSelect";
import { UserSelect } from "./UserSelect";

export function Navbar() {
    function showEditUsers() {
        if (sessionStorage.getItem("Role") === "Super") {
            return (
                <Nav.Link
                    to="/users"
                    as={NavLink}
                    style={{
                        display: "flex",
                        alignItems: "center"
                    }}
                >
                    Users
                </Nav.Link>
            );
        }
    }

    function showUserDropDown() {
        if (sessionStorage.getItem("Role") === "User") {
            return <UserSelect></UserSelect>;
        }
    }

    return (
        <NavbarBs sticky="top" className="bg-light shadow-sm mb-3">
            <Container>
                <Nav className="me-auto">
                    <img
                        src="https://www.pngitem.com/pimgs/m/134-1345744_tree-and-landscaping-services-logos-hd-png-download.png"
                        alt="Landscape Icon"
                        height="70px"
                    />
                    <Nav.Link
                        to="/"
                        as={NavLink}
                        style={{
                            display: "flex",
                            alignItems: "center"
                        }}
                    >
                        Home
                    </Nav.Link>
                    <Nav.Link
                        to="/inventory"
                        as={NavLink}
                        style={{
                            display: "flex",
                            alignItems: "center"
                        }}
                    >
                        Inventory
                    </Nav.Link>
                    <Nav.Link
                        to="/shop"
                        as={NavLink}
                        style={{
                            display: "flex",
                            alignItems: "center"
                        }}
                    >
                        Shop
                    </Nav.Link>
                    {showEditUsers()}
                    <Nav.Link
                        to="/about"
                        as={NavLink}
                        style={{
                            display: "flex",
                            alignItems: "center"
                        }}
                    >
                        About
                    </Nav.Link>
                </Nav>
                {showUserDropDown()}
                &nbsp;&nbsp;
                <RoleSelect></RoleSelect>
            </Container>
        </NavbarBs>
    );
}

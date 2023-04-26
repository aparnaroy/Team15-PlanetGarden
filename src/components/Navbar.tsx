import React from "react";
import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { UserDropDownMenu } from "../components/UserDropDown";
import { RoleSelect } from "./RoleSelect";

export function Navbar() {
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
                <UserDropDownMenu></UserDropDownMenu>
                <RoleSelect></RoleSelect>
            </Container>
        </NavbarBs>
    );
}

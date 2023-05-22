import React from "react";
import { screen } from "@testing-library/react";
import {
    InventoryDisplay,
    ChooseHeader,
    DisplayCartOrAdmin
} from "./DisplayItem";
import { renderWithProviders } from "../App.test";

describe("InventoryDisplay", () => {
    test("renders add button for Super role", () => {
        sessionStorage.setItem("Role", "Super");
        renderWithProviders(<InventoryDisplay />);
        const addButton = screen.getByText("+ Add New");
        expect(addButton).toBeInTheDocument();
    });

    test("does not render add button for non-Super roles", () => {
        sessionStorage.setItem("Role", "Regular");
        renderWithProviders(<InventoryDisplay />);
        const addButton = screen.queryByText("+ Add New");
        expect(addButton).not.toBeInTheDocument();
    });
});

describe("DisplayCartOrAdmin", () => {
    test("renders DisplayAdminList for Admin or Super roles", () => {
        sessionStorage.setItem("Role", "Admin");
        renderWithProviders(
            DisplayCartOrAdmin(
                [],
                () => {
                    [];
                },
                { id: 1, name: "John Doe", cart: [] }
            )
        );
        const adminList = screen.getByTestId("admin-list");
        expect(adminList).toBeInTheDocument();
    });
});

describe("ChooseHeader", () => {
    test("returns 'Edit' for Admin or Super roles", () => {
        sessionStorage.setItem("Role", "Admin");
        expect(ChooseHeader()).toBe("Edit ✏️");
        sessionStorage.setItem("Role", "Super");
        expect(ChooseHeader()).toBe("Edit ✏️");
    });

    test("returns 'Your Cart' for User roles", () => {
        sessionStorage.setItem("Role", "Regular");
        expect(ChooseHeader()).toBe("Your Cart 🛒");
    });
});

import React from "react";
import { renderWithProviders } from "../App.test";
import { UserSelect } from "./UserSelect";
import { screen } from "@testing-library/react";

describe("RoleSelect component", () => {
    test("renders UserSelect component", () => {
        renderWithProviders(<UserSelect />);
    });

    test("save button is initially absent", () => {
        renderWithProviders(<UserSelect />);
        const saveButton = screen.queryByText("Save");
        expect(saveButton).not.toBeInTheDocument();
    });

    test("delete button is initially absent", () => {
        renderWithProviders(<UserSelect />);
        const deleteButton = screen.queryByTestId("delete-user");
        expect(deleteButton).not.toBeInTheDocument();
    });

    test("does not render the 'Admin' label", () => {
        renderWithProviders(<UserSelect />);
        const adminLabel = screen.queryByText(/Admin/i);
        expect(adminLabel).not.toBeInTheDocument();
    });

    test("item dropdown is initially absent", () => {
        renderWithProviders(<UserSelect />);
        <UserSelect />;
        const itemDropdown = screen.queryByRole("combobox", {
            name: "---Item---"
        });
        expect(itemDropdown).not.toBeInTheDocument();
    });
});

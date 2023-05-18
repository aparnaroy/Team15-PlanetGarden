import React from "react";
import { RoleSelect } from "./RoleSelect";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../App.test";

describe("RoleSelect component", () => {
    test("renders select element with default value", () => {
        const { getByDisplayValue } = renderWithProviders(<RoleSelect />);
        const selectElement = getByDisplayValue("Select Your Role");
        expect(selectElement).toBeInTheDocument();
    });

    test("renders role label", () => {
        renderWithProviders(<RoleSelect />);
        const roleLabel = screen.getByText("Role:");
        expect(roleLabel).toBeInTheDocument();
    });

    test("renders CEO option", () => {
        renderWithProviders(<RoleSelect />);
        const ceoOption = screen.getByRole("option", { name: "CEO" });
        expect(ceoOption).toBeInTheDocument();
    });

    test("renders shopkeeper option", () => {
        renderWithProviders(<RoleSelect />);
        const shopkeeperOption = screen.getByRole("option", {
            name: "Shopkeeper"
        });
        expect(shopkeeperOption).toBeInTheDocument();
    });

    test("renders customer option", () => {
        renderWithProviders(<RoleSelect />);
        const customerOption = screen.getByRole("option", { name: "Customer" });
        expect(customerOption).toBeInTheDocument();
    });
});

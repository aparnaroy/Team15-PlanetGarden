import React from "react";
import { Inventory } from "./Inventory";
import { renderWithProviders } from "../App.test";

describe("Inventory", () => {
    test("renders inventory header", () => {
        const { getByText } = renderWithProviders(<Inventory />);
        const headerElement = getByText("Inventory");
        expect(headerElement).toBeInTheDocument();
    });

    test("renders InventoryDisplay component", () => {
        const { getByTestId } = renderWithProviders(<Inventory />);
        const inventoryDisplayElement = getByTestId("inventory-display");
        expect(inventoryDisplayElement).toBeInTheDocument();
    });

    test("renders hr element", () => {
        const { container } = renderWithProviders(<Inventory />);
        const hrElement = container.querySelector("hr");
        expect(hrElement).toBeInTheDocument();
    });

    test("has 'App' class in the parent div", () => {
        const { container } = renderWithProviders(<Inventory />);
        const parentDiv = container.querySelector(".App");
        expect(parentDiv).toBeInTheDocument();
    });

    test("renders a <br> element", () => {
        const { container } = renderWithProviders(<Inventory />);
        const brElement = container.querySelector("br");
        expect(brElement).toBeInTheDocument();
    });
});

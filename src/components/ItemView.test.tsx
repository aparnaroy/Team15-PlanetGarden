import React from "react";
import { screen } from "@testing-library/react";
import { ItemView, ItemViewProps } from "./ItemView";
import { renderWithProviders } from "../App.test";

describe("ItemView", () => {
    const item = {
        id: 1,
        name: "Item 1",
        price: 10,
        image: "item1.jpg",
        description: "Description for Item 1",
        quantity: 2,
        maintenanceLevel: 3,
        rating: 0,
        type: "",
        boughtWith: ["Item 2", "Item 3"],
        cartId: 1
    };

    const items = [item];
    const setItems = jest.fn();

    beforeEach(() => {
        sessionStorage.setItem("Role", "Super");
        sessionStorage.setItem("adminItems", JSON.stringify([]));
        renderWithProviders(
            <ItemView anItem={item} items={items} setItems={setItems} />
        );
    });

    afterEach(() => {
        sessionStorage.clear();
        setItems.mockClear();
    });

    test("does not render edit buttons for users", () => {
        sessionStorage.setItem("Role", "User");

        const editButton = screen.queryByLabelText("Edit Item");

        expect(editButton).toBeNull();
    });

    test("does not render delete buttons for users", () => {
        sessionStorage.setItem("Role", "User");

        const deleteButton = screen.queryByLabelText("Delete Item");

        expect(deleteButton).toBeNull();
    });

    test("does not render edit buttons for admins", () => {
        sessionStorage.setItem("Role", "Admin");

        const editButton = screen.queryByLabelText("Edit Item");

        expect(editButton).toBeNull();
    });

    test("does not render delete buttons for admins", () => {
        sessionStorage.setItem("Role", "Admin");

        const deleteButton = screen.queryByLabelText("Delete Item");

        expect(deleteButton).toBeNull();
    });

    const mockProps: ItemViewProps = {
        anItem: item,
        items: items,
        setItems: setItems
    };

    test("displays a card", () => {
        renderWithProviders(<ItemView {...mockProps} />);

        const cardElements = screen.getAllByTestId("card");

        expect(cardElements.length).toBeGreaterThan(0);
    });
});

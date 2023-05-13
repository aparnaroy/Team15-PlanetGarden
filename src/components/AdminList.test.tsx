import React from "react";

export function test() {
    React;
    return 0;
}

/*import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { DisplayAdminList } from "./AdminList";
import { Item } from "../interfaces/Item";
import { useSessionStorage } from "../hooks/useSessionStorage";

describe("AdminList", () => {
    const items: Item[] = [
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
        { id: 3, name: "Item 3" }
    ];

    it("should display admin list when user is a super admin or admin", () => {
        jest.spyOn(sessionStorage, "getItem").mockImplementation(() => "Admin");

        const setItems = jest.fn();
        const { getByTestId } = render(
            <DisplayAdminList items={items} setItems={setItems} />
        );

        const adminList = getByTestId("admin-list");
        expect(adminList).toBeInTheDocument();
    });

    it("should not display admin list when user is not a super admin or admin", () => {
        jest.spyOn(sessionStorage, "getItem").mockImplementation(() => "User");

        const setItems = jest.fn();
        const { container } = render(
            <DisplayAdminList items={items} setItems={setItems} />
        );

        expect(container).toBeEmptyDOMElement();
    });

    it("should add an item to admin list when dropped", () => {
        jest.spyOn(sessionStorage, "getItem").mockImplementation(() => "Admin");

        const setItems = jest.fn();
        const { getByTestId, getByText } = render(
            <DisplayAdminList items={items} setItems={setItems} />
        );

        const itemToDrop = getByTestId("item-1");
        const adminList = getByTestId("admin-list");
        fireEvent.drop(itemToDrop, { target: adminList });

        const addedItem = getByText("Item 1");
        expect(addedItem).toBeInTheDocument();
    });

    it("should remove item from admin list when remove button is clicked", () => {
        jest.spyOn(sessionStorage, "getItem").mockImplementation(() => "Admin");

        const setItems = jest.fn();
        const { getByTestId, getByText, queryByText } = render(
            <DisplayAdminList items={items} setItems={setItems} />
        );

        const itemToDrop = getByTestId("item-1");
        const adminList = getByTestId("admin-list");
        fireEvent.drop(itemToDrop, { target: adminList });

        const removeButton = getByText("Remove Item");
        fireEvent.click(removeButton);

        const removedItem = queryByText("Item 1");
        expect(removedItem).not.toBeInTheDocument();
    });
});
*/

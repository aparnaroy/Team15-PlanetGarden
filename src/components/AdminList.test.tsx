import React from "react";
import { DisplayAdminList, deleteFromAdminList } from "./AdminList";
import { renderWithProviders } from "../App.test";

describe("DisplayAdminList", () => {
    beforeAll(() => {
        Object.defineProperty(window.sessionStorage, "getItem", {
            value: () => "Admin",
            writable: true
        });
    });

    test("should display admin list when user is a super admin or admin", () => {
        const setItems = jest.fn();
        const { getByTestId } = renderWithProviders(
            <DisplayAdminList items={[]} setItems={setItems} />
        );

        const adminList = getByTestId("admin-list");
        expect(adminList).toBeInTheDocument();
    });

    test("should not display admin list when user is not a super admin or admin", () => {
        Object.defineProperty(window.sessionStorage, "getItem", {
            value: () => "User",
            writable: true
        });

        const setItems = jest.fn();
        const { container } = renderWithProviders(
            <DisplayAdminList items={[]} setItems={setItems} />
        );

        expect(container).toContainHTML(
            // eslint-disable-next-line quotes
            '<div><div data-testid="admin-list" /></div>'
        );
    });
});

describe("deleteFromAdminList", () => {
    test("should remove the item with the specified itemID from adminItems 1", () => {
        const itemID = 2;
        const adminItems = [
            {
                id: 1,
                name: "Item 1",
                price: 10,
                image: "",
                description: "a description",
                quantity: 3,
                maintenanceLevel: 4,
                rating: 0,
                type: "",
                boughtWith: [],
                cartId: 1
            },
            {
                id: 2,
                name: "Item 2",
                price: 34,
                image: "",
                description: "a description",
                quantity: 1,
                maintenanceLevel: 3,
                rating: 0,
                type: "",
                boughtWith: [],
                cartId: 2
            }
        ];
        const expectedAdminItems = [
            {
                id: 1,
                name: "Item 1",
                price: 10,
                image: "",
                description: "a description",
                quantity: 3,
                maintenanceLevel: 4,
                rating: 0,
                type: "",
                boughtWith: [],
                cartId: 1
            }
        ];

        deleteFromAdminList(itemID, adminItems);

        const updatedAdminItems = JSON.parse(
            sessionStorage.getItem("adminItems") || "[]"
        );
        expect(updatedAdminItems).toEqual(expectedAdminItems);
    });

    test("should remove the item with the specified itemID from adminItems 2", () => {
        const itemID = 1;
        const adminItems = [
            {
                id: 1,
                name: "Item 1",
                price: 10,
                image: "",
                description: "a description",
                quantity: 3,
                maintenanceLevel: 4,
                rating: 0,
                type: "",
                boughtWith: [],
                cartId: 1
            },
            {
                id: 2,
                name: "Item 2",
                price: 34,
                image: "",
                description: "a description",
                quantity: 1,
                maintenanceLevel: 3,
                rating: 0,
                type: "",
                boughtWith: [],
                cartId: 2
            }
        ];
        const expectedAdminItems = [
            {
                id: 2,
                name: "Item 2",
                price: 34,
                image: "",
                description: "a description",
                quantity: 1,
                maintenanceLevel: 3,
                rating: 0,
                type: "",
                boughtWith: [],
                cartId: 2
            }
        ];

        deleteFromAdminList(itemID, adminItems);

        const updatedAdminItems = JSON.parse(
            sessionStorage.getItem("adminItems") || "[]"
        );
        expect(updatedAdminItems).toEqual(expectedAdminItems);
    });

    test("should not modify adminItems if the itemID is not found", () => {
        const itemID = 4;
        const adminItems = [
            {
                id: 1,
                name: "Item 1",
                price: 10,
                image: "",
                description: "a description",
                quantity: 3,
                maintenanceLevel: 4,
                rating: 0,
                type: "",
                boughtWith: [],
                cartId: 1
            },
            {
                id: 2,
                name: "Item 2",
                price: 34,
                image: "",
                description: "a description",
                quantity: 1,
                maintenanceLevel: 3,
                rating: 0,
                type: "",
                boughtWith: [],
                cartId: 2
            }
        ];

        deleteFromAdminList(itemID, adminItems);

        const updatedAdminItems = JSON.parse(
            sessionStorage.getItem("adminItems") || "[]"
        );
        expect(updatedAdminItems).toEqual(adminItems);
    });
});

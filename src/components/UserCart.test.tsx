import React from "react";
import { screen } from "@testing-library/react";
import {
    DisplayUserList,
    DeleteFromAllUserCarts,
    CalculateTotalOccurrences,
    CurrentCart
} from "./UserCart";
import { renderWithProviders } from "../App.test";
import { User } from "../interfaces/User";

describe("CalculateTotalOccurrences", () => {
    beforeEach(() => {
        sessionStorage.setItem(
            "USERS",
            JSON.stringify([
                { id: 1, cart: [{ id: 123 }, { id: 456 }] },
                { id: 2, cart: [{ id: 123 }, { id: 789 }] },
                { id: 3, cart: [{ id: 456 }, { id: 789 }] }
            ])
        );
    });

    test("should calculate the total occurrences of each item in the users' carts", () => {
        const result = CalculateTotalOccurrences();

        expect(result).toBeInstanceOf(Map);
        expect(result.size).toBe(3);
        expect(result.get(123)).toBe(2);
        expect(result.get(456)).toBe(2);
        expect(result.get(789)).toBe(2);
    });

    test("should return an empty map if 'USERS' is not found in sessionStorage", () => {
        sessionStorage.removeItem("USERS");

        const result = CalculateTotalOccurrences();

        expect(result).toBeInstanceOf(Map);
        expect(result.size).toBe(0);
    });
});

describe("DeleteFromAllUserCarts", () => {
    const mockSetItem = jest.fn();

    beforeEach(() => {
        Object.defineProperty(global, "sessionStorage", {
            value: {
                setItem: mockSetItem
            },
            writable: true
        });
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test("should continuously update sessionStorage if no users exist", () => {
        const itemID = 123;
        const allUsers: User[] = [];

        DeleteFromAllUserCarts(itemID, allUsers);

        expect(mockSetItem).toHaveBeenCalled();
    });
});

describe("DisplayUserList", () => {
    const items = [
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
            price: 20,
            image: "",
            description: "a description",
            quantity: 1,
            maintenanceLevel: 3,
            rating: 0,
            type: "",
            boughtWith: [],
            cartId: 2
        },
        {
            id: 3,
            name: "Item 3",
            price: 30,
            image: "",
            description: "a description",
            quantity: 1,
            maintenanceLevel: 3,
            rating: 0,
            type: "",
            boughtWith: [],
            cartId: 3
        }
    ];

    beforeAll(() => {
        const sessionStorageMock = {
            getItem: jest.fn(),
            setItem: jest.fn(),
            removeItem: jest.fn()
        };

        Object.defineProperty(window, "sessionStorage", {
            value: sessionStorageMock,
            writable: true
        });
    });

    test("should not render cart items when no items exist", () => {
        const selectedUser = { id: 1, name: "Sam", cart: [] };

        renderWithProviders(
            <DisplayUserList
                items={items}
                setItems={jest.fn()}
                selectedUser={selectedUser}
            />
        );

        const cartItems = screen.queryAllByTestId("cart-item");
        expect(cartItems.length).toBe(0);
    });
});

describe("CurrentCart", () => {
    test("should return an empty array if the cart is not found in sessionStorage", () => {
        sessionStorage.getItem = jest.fn(() => null);

        const userId = 1;
        const result = CurrentCart(userId);

        expect(result).toEqual([]);
    });

    test("should return an empty array if the cart is empty in sessionStorage", () => {
        sessionStorage.getItem = jest.fn(() => "");

        const userId = 1;
        const result = CurrentCart(userId);

        expect(result).toEqual([]);
    });

    test("should return the parsed cart array from sessionStorage", () => {
        const cartArray = [
            { id: 1, name: "Item 1" },
            { id: 2, name: "Item 2" }
        ];

        sessionStorage.getItem = jest.fn(() => JSON.stringify(cartArray));

        const userId = 1;
        const result = CurrentCart(userId);

        expect(result).toEqual(cartArray);
    });
});

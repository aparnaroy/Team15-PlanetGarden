import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { AddItem } from "./AddItem";

describe("AddItem component", () => {
    const onSave = jest.fn();

    beforeEach(() => {
        onSave.mockClear();
    });

    test("renders all input fields", () => {
        render(<AddItem onSave={onSave} />);
        expect(screen.getByPlaceholderText("Name")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Price")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Image URL")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Description")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Quantity")).toBeInTheDocument();
        expect(
            screen.getByPlaceholderText("Maintenance Level")
        ).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Rating")).toBeInTheDocument();
        expect(screen.getByDisplayValue("Choose a Type")).toBeInTheDocument();
        expect(
            screen.getByPlaceholderText("Frequently Bought With")
        ).toBeInTheDocument();
    });

    test("calls onSave function with correct values when form is submitted", () => {
        const newItem = {
            id: expect.any(Number),
            name: "Test Item",
            price: 10,
            image: "http://test.com/image.jpg",
            description: "This is a test item",
            quantity: 5,
            maintenanceLevel: 3,
            rating: 4,
            type: "Tree",
            boughtWith: ["Item A", "Item B"]
        };

        render(<AddItem onSave={onSave} />);

        const nameInput = screen.getByPlaceholderText("Name");
        const priceInput = screen.getByPlaceholderText("Price");
        const imageInput = screen.getByPlaceholderText("Image URL");
        const descriptionInput = screen.getByPlaceholderText("Description");
        const quantityInput = screen.getByPlaceholderText("Quantity");
        const maintenanceInput =
            screen.getByPlaceholderText("Maintenance Level");
        const ratingInput = screen.getByPlaceholderText("Rating");
        const typeInput = screen.getByDisplayValue("Choose a Type");
        const boughtWithInput = screen.getByPlaceholderText(
            "Frequently Bought With"
        );

        fireEvent.change(nameInput, { target: { value: newItem.name } });
        fireEvent.change(priceInput, { target: { value: newItem.price } });
        fireEvent.change(imageInput, { target: { value: newItem.image } });
        fireEvent.change(descriptionInput, {
            target: { value: newItem.description }
        });
        fireEvent.change(quantityInput, {
            target: { value: newItem.quantity }
        });
        fireEvent.change(maintenanceInput, {
            target: { value: newItem.maintenanceLevel }
        });
        fireEvent.change(ratingInput, { target: { value: newItem.rating } });
        fireEvent.change(typeInput, { target: { value: newItem.type } });
        fireEvent.change(boughtWithInput, {
            target: { value: newItem.boughtWith.join(",") }
        });

        const saveButton = screen.getByText("Save");
        fireEvent.click(saveButton);

        expect(onSave).toHaveBeenCalledTimes(1);
        expect(onSave).toHaveBeenCalledWith(newItem);
    });
});

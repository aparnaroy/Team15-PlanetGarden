import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { AddItem, AddItemProps } from "./AddItem";

describe("AddItem", () => {
    const onSaveMock = jest.fn();
    const defaultProps: AddItemProps = {
        onSave: onSaveMock
    };

    beforeEach(() => {
        render(<AddItem {...defaultProps} />);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test("should call onSave function with the correct item when form is submitted 1", () => {
        // Arrange
        const nameInput = screen.getByPlaceholderText("Name");
        const priceInput = screen.getByPlaceholderText("Price");
        const imageInput = screen.getByPlaceholderText("Image URL");
        const descriptionInput = screen.getByPlaceholderText("Description");
        const quantityInput = screen.getByPlaceholderText("Quantity");
        const maintenanceInput =
            screen.getByPlaceholderText("Maintenance Level");
        const boughtWithInput = screen.getByPlaceholderText(
            "Frequently Bought With"
        );
        const saveButton = screen.getByText("Save");

        const item = {
            id: expect.any(Number),
            name: "Test Item",
            price: 10,
            image: "https://example.com/image.jpg",
            description: "Test description",
            quantity: 5,
            maintenanceLevel: 3,
            rating: NaN,
            type: "",
            boughtWith: [],
            cartId: expect.any(Number)
        };

        // Act
        fireEvent.change(nameInput, { target: { value: item.name } });
        fireEvent.change(priceInput, {
            target: { value: item.price.toString() }
        });
        fireEvent.change(imageInput, { target: { value: item.image } });
        fireEvent.change(descriptionInput, {
            target: { value: item.description }
        });
        fireEvent.change(quantityInput, {
            target: { value: item.quantity.toString() }
        });
        fireEvent.change(maintenanceInput, {
            target: { value: item.maintenanceLevel.toString() }
        });
        fireEvent.change(boughtWithInput, { target: { value: "" } }); // Clear the input
        fireEvent.click(saveButton);

        // Assert
        expect(onSaveMock).toHaveBeenCalledWith(item);
    });

    test("should call onSave function with the correct item when form is submitted 2", () => {
        // Arrange
        const nameInput = screen.getByPlaceholderText("Name");
        const priceInput = screen.getByPlaceholderText("Price");
        const imageInput = screen.getByPlaceholderText("Image URL");
        const descriptionInput = screen.getByPlaceholderText("Description");
        const quantityInput = screen.getByPlaceholderText("Quantity");
        const maintenanceInput =
            screen.getByPlaceholderText("Maintenance Level");
        const boughtWithInput = screen.getByPlaceholderText(
            "Frequently Bought With"
        );
        const saveButton = screen.getByText("Save");

        const item = {
            id: expect.any(Number),
            name: "Test askdjnj 2",
            price: 10,
            image: "https://sakbjf2.com/image.jpg",
            description: "Test ,masd 2",
            quantity: 15,
            maintenanceLevel: 1,
            rating: NaN,
            type: "",
            boughtWith: [],
            cartId: expect.any(Number)
        };

        // Act
        fireEvent.change(nameInput, { target: { value: item.name } });
        fireEvent.change(priceInput, {
            target: { value: item.price.toString() }
        });
        fireEvent.change(imageInput, { target: { value: item.image } });
        fireEvent.change(descriptionInput, {
            target: { value: item.description }
        });
        fireEvent.change(quantityInput, {
            target: { value: item.quantity.toString() }
        });
        fireEvent.change(maintenanceInput, {
            target: { value: item.maintenanceLevel.toString() }
        });
        fireEvent.change(boughtWithInput, { target: { value: "" } }); // Clear the input
        fireEvent.click(saveButton);

        // Assert
        expect(onSaveMock).toHaveBeenCalledWith(item);
    });

    test("should call onSave function with the correct item when form is submitted 3", () => {
        // Arrange
        const nameInput = screen.getByPlaceholderText("Name");
        const priceInput = screen.getByPlaceholderText("Price");
        const imageInput = screen.getByPlaceholderText("Image URL");
        const descriptionInput = screen.getByPlaceholderText("Description");
        const quantityInput = screen.getByPlaceholderText("Quantity");
        const maintenanceInput =
            screen.getByPlaceholderText("Maintenance Level");
        const boughtWithInput = screen.getByPlaceholderText(
            "Frequently Bought With"
        );
        const saveButton = screen.getByText("Save");

        const item = {
            id: expect.any(Number),
            name: "Bushes",
            price: 10,
            image: "https://bushes.com/image.jpg",
            description: "This is a bush description",
            quantity: 302,
            maintenanceLevel: 4,
            rating: NaN,
            type: "",
            boughtWith: [],
            cartId: expect.any(Number)
        };

        // Act
        fireEvent.change(nameInput, { target: { value: item.name } });
        fireEvent.change(priceInput, {
            target: { value: item.price.toString() }
        });
        fireEvent.change(imageInput, { target: { value: item.image } });
        fireEvent.change(descriptionInput, {
            target: { value: item.description }
        });
        fireEvent.change(quantityInput, {
            target: { value: item.quantity.toString() }
        });
        fireEvent.change(maintenanceInput, {
            target: { value: item.maintenanceLevel.toString() }
        });
        fireEvent.change(boughtWithInput, { target: { value: "" } }); // Clear the input
        fireEvent.click(saveButton);

        // Assert
        expect(onSaveMock).toHaveBeenCalledWith(item);
    });

    test("should call onSave function with the correct item when form is submitted 5", () => {
        // Arrange
        const nameInput = screen.getByPlaceholderText("Name");
        const priceInput = screen.getByPlaceholderText("Price");
        const imageInput = screen.getByPlaceholderText("Image URL");
        const descriptionInput = screen.getByPlaceholderText("Description");
        const quantityInput = screen.getByPlaceholderText("Quantity");
        const maintenanceInput =
            screen.getByPlaceholderText("Maintenance Level");
        const boughtWithInput = screen.getByPlaceholderText(
            "Frequently Bought With"
        );
        const saveButton = screen.getByText("Save");

        const item = {
            id: expect.any(Number),
            name: "Test Item 5",
            price: 86,
            image: "https://example5.com/image.jpg",
            description: "Test description 5",
            quantity: 60,
            maintenanceLevel: 5,
            rating: NaN,
            type: "",
            boughtWith: [],
            cartId: expect.any(Number)
        };

        // Act
        fireEvent.change(nameInput, { target: { value: item.name } });
        fireEvent.change(priceInput, {
            target: { value: item.price.toString() }
        });
        fireEvent.change(imageInput, { target: { value: item.image } });
        fireEvent.change(descriptionInput, {
            target: { value: item.description }
        });
        fireEvent.change(quantityInput, {
            target: { value: item.quantity.toString() }
        });
        fireEvent.change(maintenanceInput, {
            target: { value: item.maintenanceLevel.toString() }
        });
        fireEvent.change(boughtWithInput, { target: { value: "" } }); // Clear the input
        fireEvent.click(saveButton);

        // Assert
        expect(onSaveMock).toHaveBeenCalledWith(item);
    });

    test("should reset the form fields after save", () => {
        // Arrange
        const nameInput = screen.getByPlaceholderText("Name");
        const priceInput = screen.getByPlaceholderText("Price");
        const imageInput = screen.getByPlaceholderText("Image URL");
        const descriptionInput = screen.getByPlaceholderText("Description");
        const quantityInput = screen.getByPlaceholderText("Quantity");
        const maintenanceInput =
            screen.getByPlaceholderText("Maintenance Level");
        const boughtWithInput = screen.getByPlaceholderText(
            "Frequently Bought With"
        );
        //const saveButton = screen.getByText("Save");

        // Act
        fireEvent.change(nameInput, { target: { value: "Test Item 5" } });
        fireEvent.change(priceInput, { target: { value: "86" } });
        fireEvent.change(imageInput, {
            target: { value: "https://example5.com/image.jpg" }
        });
        fireEvent.change(descriptionInput, {
            target: { value: "Test description 5" }
        });
        fireEvent.change(quantityInput, { target: { value: "60" } });
        fireEvent.change(maintenanceInput, { target: { value: "5" } });
        fireEvent.change(boughtWithInput, {
            target: { value: "Item Another" }
        });
    });
});

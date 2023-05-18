import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { EditItem } from "./EditItem";

const item = {
    id: 1,
    name: "Test Item",
    price: 10,
    image: "",
    description: "Test Description",
    quantity: 1,
    maintenanceLevel: 1,
    rating: 1,
    type: "Flower",
    boughtWith: [],
    cartId: 1
};

describe("EditItem component", () => {
    test("updates item name on input change", () => {
        const onSave = jest.fn();
        render(<EditItem item={item} onSave={onSave} />);
        const nameInput = screen.getByPlaceholderText("Name");
        fireEvent.change(nameInput, { target: { value: "New Test Item" } });
        expect(nameInput).toHaveValue("New Test Item");
    });

    test("calls onSave with updated item on save button click", () => {
        const onSave = jest.fn();
        render(<EditItem item={item} onSave={onSave} />);
        const saveButton = screen.getByText("Save");
        fireEvent.click(saveButton);
        expect(onSave).toHaveBeenCalledWith("Test Item", {
            ...item,
            name: "Test Item",
            cartId: expect.any(Number)
        });
    });

    test("does not update item on save button click with no changes", () => {
        const onSave = jest.fn();
        render(<EditItem item={item} onSave={onSave} />);
        const saveButton = screen.getByText("Save");
        fireEvent.click(saveButton);
        expect(onSave).toHaveBeenCalledWith("Test Item", {
            ...item,
            cartId: expect.any(Number)
        });
    });

    test("renders select input with correct options", () => {
        render(<EditItem item={item} onSave={jest.fn()} />);
        const typeSelect = screen.getByRole("combobox");
        expect(typeSelect).toBeInTheDocument();
        const options = screen.getAllByRole("option");
        expect(options.length).toBe(5);
        expect(options[0]).toHaveTextContent("Choose a Type");
        expect(options[1]).toHaveTextContent("Tree");
        expect(options[2]).toHaveTextContent("Flower");
        expect(options[3]).toHaveTextContent("Structure");
        expect(options[4]).toHaveTextContent("Greenery");
    });

    test("updates frequently bought with on input change", () => {
        render(<EditItem item={item} onSave={jest.fn()} />);
        const boughtWithInput = screen.getByPlaceholderText(
            "Frequently Bought With"
        );
        fireEvent.change(boughtWithInput, { target: { value: "Item1,Item2" } });
        expect(boughtWithInput).toHaveValue("Item1,Item2");
    });
});

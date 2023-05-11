/**
 * /import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ItemView } from "./ItemView";

const item = {
    id: 1,
    name: "Test Item",
    image: "https://via.placeholder.com/150",
    price: 9.99
};

describe("ItemView", () => {
    test("renders item name and price", () => {
        render(<ItemView anItem={item} />);
        expect(screen.getByText(item.name)).toBeInTheDocument();
        expect(screen.getByText(`$${item.price}`)).toBeInTheDocument();
    });

    test("can delete an item", () => {
        const setItems = jest.fn();
        const items = [item];
        render(<ItemView anItem={item} items={items} setItems={setItems} />);
        userEvent.click(screen.getByText("Delete Item"));
        expect(setItems).toHaveBeenCalledWith([]);
    });

    test("can edit an item", () => {
        const setItems = jest.fn();
        const items = [item];
        render(<ItemView anItem={item} items={items} setItems={setItems} />);
        userEvent.click(screen.getByText("Edit Item"));
        expect(screen.getByLabelText("Name")).toHaveValue(item.name);
        userEvent.type(screen.getByLabelText("Name"), " Edited");
        userEvent.click(screen.getByText("Save"));
        expect(setItems).toHaveBeenCalledWith([
            { ...item, name: `${item.name} Edited` }
        ]);
    });

    test("displays edit and delete buttons for Super role in inventory page", () => {
        sessionStorage.setItem("Role", "Super");
        Object.defineProperty(window.location, "href", {
            writable: true,
            value: "http://localhost/inventory"
        });
        render(<ItemView anItem={item} />);
        expect(screen.getByText("Edit Item")).toBeInTheDocument();
        expect(screen.getByText("Delete Item")).toBeInTheDocument();
    });

    test("displays edit button for Super and Admin roles in shop page", () => {
        sessionStorage.setItem("Role", "Super");
        Object.defineProperty(window.location, "href", {
            writable: true,
            value: "http://localhost/shop"
        });
        render(<ItemView anItem={item} />);
        expect(screen.getByText("Edit Item")).toBeInTheDocument();

        sessionStorage.setItem("Role", "Admin");
        render(<ItemView anItem={item} />);
        expect(screen.getByText("Edit Item")).toBeInTheDocument();
    });
});
**/

import { render, screen, fireEvent } from "@testing-library/react";
import { displayCartOrAdmin } from "./DisplayItem";
import { useSessionStorage } from "../hooks/useSessionStorage";

jest.mock("../hooks/useSessionStorage");

describe("InventoryDisplay", () => {
    beforeEach(() => {
        useSessionStorage.mockReturnValue([[], jest.fn()]);
    });

    it("should render the add button if the user is a super admin", () => {
        sessionStorage.setItem("Role", "Super");
        render(<DisplayAdminList />);
        const addButton = screen.getByRole("button", { name: "Add New Item" });
        expect(addButton).toBeInTheDocument();
    });

    it("should not render the add button if the user is not a super admin", () => {
        sessionStorage.setItem("Role", "User");
        render(<DisplayUserList />);
        const addButton = screen.queryByRole("button", {
            name: "Add New Item"
        });
        expect(addButton).not.toBeInTheDocument();
    });

    it("should show the add item form when the add button is clicked", () => {
        sessionStorage.setItem("Role", "Super");
        render(<DisplayAdminList />);
        const addButton = screen.getByRole("button", { name: "Add New Item" });
        fireEvent.click(addButton);
        const itemNameInput = screen.getByLabelText("Item Name");
        expect(itemNameInput).toBeInTheDocument();
    });
});

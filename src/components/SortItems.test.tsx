import React from "react";
import { screen } from "@testing-library/react";
import { SortDropDown } from "./SortItems";
import { renderWithProviders } from "../App.test";

describe("SortDropDown", () => {
    test("renders SortDropDown component", () => {
        renderWithProviders(<SortDropDown />);
    });

    test("does not render search bar when option is not 'By keyword'", () => {
        renderWithProviders(<SortDropDown />);
        const searchInput = screen.queryByPlaceholderText(/Start typing.../i);
        expect(searchInput).not.toBeInTheDocument();
    });

    test("renders default option in the sort dropdown", () => {
        renderWithProviders(<SortDropDown />);
        const defaultOption = screen.getByText("---Sort or Filter Items---");
        expect(defaultOption).toBeInTheDocument();
    });

    test("renders sort by price (low to high) in the sort dropdown", () => {
        renderWithProviders(<SortDropDown />);
        const defaultOption = screen.getByText("Price (low to high)");
        expect(defaultOption).toBeInTheDocument();
    });

    test("renders sort by keyword in the sort dropdown", () => {
        renderWithProviders(<SortDropDown />);
        const defaultOption = screen.getByText("By Keyword");
        expect(defaultOption).toBeInTheDocument();
    });
});

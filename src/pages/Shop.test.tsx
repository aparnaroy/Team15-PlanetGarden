import React from "react";
import { Shop } from "./Shop";
import { renderWithProviders } from "../App.test";

describe("Shop", () => {
    test("renders shop header", () => {
        const { getByText } = renderWithProviders(<Shop />);
        const headerElement = getByText("Shop");
        expect(headerElement).toBeInTheDocument();
    });

    test("renders SortDropDown component", () => {
        const { getByTestId } = renderWithProviders(<Shop />);
        const sortDropDownElement = getByTestId("sort-dropdown");
        expect(sortDropDownElement).toBeInTheDocument();
    });

    test("renders a <br> element", () => {
        const { container } = renderWithProviders(<Shop />);
        const brElement = container.querySelector("br");
        expect(brElement).toBeInTheDocument();
    });

    test("renders hr element", () => {
        const { container } = renderWithProviders(<Shop />);
        const hrElement = container.querySelector("hr");
        expect(hrElement).toBeInTheDocument();
    });

    test("has 'App' class in the parent div", () => {
        const { container } = renderWithProviders(<Shop />);
        const parentDiv = container.querySelector(".App");
        expect(parentDiv).toBeInTheDocument();
    });
});

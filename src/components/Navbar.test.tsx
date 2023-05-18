import React from "react";
import { Navbar } from "./Navbar";
import { renderWithProviders } from "../App.test";

describe("Navbar component", () => {
    test("should render Home link", () => {
        const { getByText } = renderWithProviders(<Navbar />);
        const linkElement = getByText(/Home/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("should render Inventory link", () => {
        const { getByText } = renderWithProviders(<Navbar />);
        const linkElement = getByText(/Inventory/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("should not render Users link for non-Super role", () => {
        sessionStorage.setItem("Role", "User");
        const { queryByText } = renderWithProviders(<Navbar />);
        const linkElement = queryByText(/Users/i);
        expect(linkElement).toBeNull();
    });

    test("should render Users link for Super role", () => {
        sessionStorage.setItem("Role", "Super");
        const { getByText } = renderWithProviders(<Navbar />);
        const linkElement = getByText(/Users/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("should render About link", () => {
        const { getByText } = renderWithProviders(<Navbar />);
        const linkElement = getByText(/About/i);
        expect(linkElement).toBeInTheDocument();
    });
});

import React from "react";
import { render } from "@testing-library/react";
import { Navbar } from "./Navbar";

describe("Navbar component", () => {
    it("should render Home link", () => {
        const { getByText } = render(<Navbar />);
        const linkElement = getByText(/Home/i);
        expect(linkElement).toBeInTheDocument();
    });

    it("should render Inventory link", () => {
        const { getByText } = render(<Navbar />);
        const linkElement = getByText(/Inventory/i);
        expect(linkElement).toBeInTheDocument();
    });

    it("should render Shop link", () => {
        const { getByText } = render(<Navbar />);
        const linkElement = getByText(/Shop/i);
        expect(linkElement).toBeInTheDocument();
    });

    it("should not render Users link for non-Super role", () => {
        sessionStorage.setItem("Role", "User");
        const { queryByText } = render(<Navbar />);
        const linkElement = queryByText(/Users/i);
        expect(linkElement).toBeNull();
    });

    it("should render Users link for Super role", () => {
        sessionStorage.setItem("Role", "Super");
        const { getByText } = render(<Navbar />);
        const linkElement = getByText(/Users/i);
        expect(linkElement).toBeInTheDocument();
    });

    it("should render About link", () => {
        const { getByText } = render(<Navbar />);
        const linkElement = getByText(/About/i);
        expect(linkElement).toBeInTheDocument();
    });
});

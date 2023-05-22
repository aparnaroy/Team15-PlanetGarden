import React from "react";
import { render } from "@testing-library/react";
import { Users } from "./Users";

describe("Users", () => {
    test("renders edit users header", () => {
        const { getByText } = render(<Users />);
        const headerElement = getByText("Edit Users");
        expect(headerElement).toBeInTheDocument();
    });

    test("renders UserSelect component", () => {
        const { getByTestId } = render(<Users />);
        const userSelectElement = getByTestId("user-select");
        expect(userSelectElement).toBeInTheDocument();
    });

    test("renders a div with the 'App' class", () => {
        const { container } = render(<Users />);
        const appDiv = container.querySelector(".App");
        expect(appDiv).toBeInTheDocument();
    });

    test("renders a <br> element", () => {
        const { container } = render(<Users />);
        const brElement = container.querySelector("br");
        expect(brElement).toBeInTheDocument();
    });

    test("renders two <br> elements", () => {
        const { container } = render(<Users />);
        const brElements = container.querySelectorAll("br");
        expect(brElements.length).toBe(2);
    });
});

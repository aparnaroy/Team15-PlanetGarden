import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { ExpandableSection } from "./Expandable";

describe("ExpandableSection", () => {
    it("renders the button with 'Show More' text", () => {
        const { getByText } = render(
            <ExpandableSection>
                <div></div>
                <p>Child</p>
            </ExpandableSection>
        );
        expect(getByText("Show More")).toBeInTheDocument();
    });

    it("renders the children when 'Show More' button is clicked", () => {
        const { getByText } = render(
            <ExpandableSection>
                <div></div>
                <p>Child</p>
            </ExpandableSection>
        );
        fireEvent.click(getByText("Show More"));
        expect(getByText("Child")).toBeInTheDocument();
    });

    it("toggles the button text and caret on click", () => {
        const { getByText, getByTestId } = render(
            <ExpandableSection>
                <div></div>
                <p>Child</p>
            </ExpandableSection>
        );
        const button = getByText("Show More");
        const caret = getByTestId("caret");

        expect(button).toBeInTheDocument();
        expect(caret).toHaveStyle("transform: rotate(0deg)");

        fireEvent.click(button);

        expect(button).toHaveTextContent("Show Less");
        expect(caret).toHaveStyle("transform: rotate(180deg)");

        fireEvent.click(button);

        expect(button).toHaveTextContent("Show More");
        expect(caret).toHaveStyle("transform: rotate(0deg)");
    });
});

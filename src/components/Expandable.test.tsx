import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { ExpandableSection, ExpandableSectionAbout } from "./Expandable";

describe("ExpandableSection1", () => {
    test("renders the button with 'Show More' text", () => {
        const { getByText } = render(
            <ExpandableSection>
                <div></div>
                <p>Child</p>
            </ExpandableSection>
        );
        expect(getByText("Show More")).toBeInTheDocument();
    });

    test("renders the children when 'Show More' button is clicked", () => {
        const { getByText } = render(
            <ExpandableSection>
                <div></div>
                <p>Child</p>
            </ExpandableSection>
        );
        fireEvent.click(getByText("Show More"));
        expect(getByText("Child")).toBeInTheDocument();
    });
});

describe("ExpandableSection2", () => {
    test("hides children by default", () => {
        const { queryByText } = render(
            <ExpandableSection>
                <></>
                <div>Children content</div>
            </ExpandableSection>
        );
        expect(queryByText("Children content")).not.toBeInTheDocument();
    });

    test("shows children when expanded", () => {
        const { getByText, queryByText } = render(
            <ExpandableSection>
                <></>
                <div>Children content</div>
            </ExpandableSection>
        );
        const buttonElement = getByText("Show More");
        fireEvent.click(buttonElement);
        expect(queryByText("Children content")).toBeInTheDocument();
    });
});

describe("ExpandableSectionAbout", () => {
    test("shows children by default", () => {
        const { queryByText } = render(
            <ExpandableSectionAbout>
                <></>
                <div>Children content</div>
            </ExpandableSectionAbout>
        );
        expect(queryByText("Children content")).toBeInTheDocument();
    });

    test("hides children when collapsed", () => {
        const { getByText, queryByText } = render(
            <ExpandableSectionAbout>
                <></>
                <div>Children content</div>
            </ExpandableSectionAbout>
        );
        const buttonElement = getByText("Hide");
        fireEvent.click(buttonElement);
        expect(queryByText("Children content")).not.toBeInTheDocument();
    });
});

import React from "react";
import { render, screen } from "@testing-library/react";
import { About } from "./About";

describe("About page", () => {
    test("renders the header", () => {
        render(<About />);
        const header = screen.getByText("About Us");
        expect(header).toBeInTheDocument();
    });

    test("renders the team names", () => {
        render(<About />);
        const teamNames = screen.getByText(
            "Emilie Barniak, Jillian Camp, Emma Frampton, Mikaylla Haskins, Aparna Roy"
        );
        expect(teamNames).toBeInTheDocument();
    });

    test("renders the team description", () => {
        render(<About />);
        const teamDescription = screen.getByText(
            "Dedicated, Motivated, and Passionate Landscapers excited to bring the view to you!"
        );
        expect(teamDescription).toBeInTheDocument();
    });

    test("renders the services description", () => {
        render(<About />);
        const servicesDescription = screen.getByText(
            "You want flowers? We got you. Trees? We got you. Even a pond? No worries, we still got you."
        );
        expect(servicesDescription).toBeInTheDocument();
    });

    test("does not render the contact form", () => {
        render(<About />);
        const contactForm = screen.queryByLabelText("Email");
        expect(contactForm).not.toBeInTheDocument();
    });
});

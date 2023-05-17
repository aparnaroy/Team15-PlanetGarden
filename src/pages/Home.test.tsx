import React from "react";
import { render, screen } from "@testing-library/react";
import { Home } from "./Home";
import PlanetGardenImage from "../assets/Planet-Garden.png";

describe("Home page", () => {
    test("renders the header", () => {
        render(<Home />);
        const header = screen.getByText("Planet Garden 🪴");
        expect(header).toBeInTheDocument();
    });

    test("renders the main title", () => {
        render(<Home />);
        const mainTitle = screen.getByText("We Bring the View to You");
        expect(mainTitle).toBeInTheDocument();
    });

    test("renders the first description", () => {
        render(<Home />);
        const firstDescription = screen.getByText(
            "Here at Planet Garden, we help you build your dream landscape!"
        );
        expect(firstDescription).toBeInTheDocument();
    });

    test("renders the second description", () => {
        render(<Home />);
        const secondDescription = screen.getByText(
            "Whether it be for your backyard, estate property, or even a wedding venue, we have it all!"
        );
        expect(secondDescription).toBeInTheDocument();
    });

    test("renders the Planet Garden image", () => {
        render(<Home />);
        const planetGardenImage = screen.getByAltText("PlanetGarden");
        expect(planetGardenImage).toBeInTheDocument();
        expect(planetGardenImage.getAttribute("src")).toContain(
            PlanetGardenImage
        );
    });
});

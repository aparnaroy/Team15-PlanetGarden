import React, { ReactElement, ReactNode } from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export const renderWithProviders = (ui: ReactElement) => {
    const Wrapper = ({ children }: { children: ReactNode }) => {
        return (
            <HashRouter>
                <DndProvider backend={HTML5Backend}>{children}</DndProvider>
            </HashRouter>
        );
    };

    return render(ui, { wrapper: Wrapper });
};

describe("App", () => {
    test("renders Navbar component with Home", () => {
        const { getByText } = render(
            <HashRouter>
                <App />
            </HashRouter>
        );
        const navbarElement = getByText("Home");
        expect(navbarElement).toBeInTheDocument();
    });

    test("renders Navbar component with Inventory", () => {
        const { getByText } = render(
            <HashRouter>
                <App />
            </HashRouter>
        );
        const navbarElement = getByText("Inventory");
        expect(navbarElement).toBeInTheDocument();
    });

    test("renders Navbar component with Shop", () => {
        const { getByText } = render(
            <HashRouter>
                <App />
            </HashRouter>
        );
        const navbarElement = getByText("Shop");
        expect(navbarElement).toBeInTheDocument();
    });

    test("renders Navbar component with About", () => {
        const { getByText } = render(
            <HashRouter>
                <App />
            </HashRouter>
        );
        const navbarElement = getByText("About");
        expect(navbarElement).toBeInTheDocument();
    });

    test("renders Navbar component with Role:", () => {
        const { getByText } = render(
            <HashRouter>
                <App />
            </HashRouter>
        );
        const navbarElement = getByText("Role:");
        expect(navbarElement).toBeInTheDocument();
    });
});

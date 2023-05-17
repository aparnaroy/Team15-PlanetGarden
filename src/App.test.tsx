import React, { ReactElement, ReactNode } from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export const renderWithProviders = (ui: ReactElement) => {
    const Wrapper = ({ children }: { children: ReactNode }) => (
        <HashRouter>
            <DndProvider backend={HTML5Backend}>{children}</DndProvider>
        </HashRouter>
    );

    return render(ui, { wrapper: Wrapper });
};

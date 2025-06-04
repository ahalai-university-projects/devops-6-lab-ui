// src/App.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

// Mock ApartmentManager to avoid rendering its internals
jest.mock("./components/ApartmentManager", () => () => (
  <div data-testid="mock-apartment-manager" />
));

describe("App component", () => {
  it("should render the ApartmentManager component", () => {
    render(<App />);
    expect(screen.getByTestId("mock-apartment-manager")).toBeInTheDocument();
  });
});

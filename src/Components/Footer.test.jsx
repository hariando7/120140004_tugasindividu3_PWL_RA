import { screen, render } from "@testing-library/react";
import { expect } from "vitest";
import Footer from "./Footer";

describe("Footer", () => {
    it("renders Footer", () => {
        render(<Footer />);
        expect(screen.getByText("Tugas 3 PWL - 120140004 - Hariando Muthi")).toBeInTheDocument();
    })
})
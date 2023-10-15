import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import Tentang from "./tentang";
describe("Tentang", () => {
    it("renders Tentang", () => {
        render(<Tentang />);
        expect(screen.getByText("Tugas 3 PWL - 120140004 - Hariando Muthi")).toBeInTheDocument();
    })
})
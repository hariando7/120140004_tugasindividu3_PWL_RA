import { fireEvent, render, screen } from "@testing-library/react";
import { expect } from "vitest";
import Kontak from "./kontak";
describe("Kontak", () => {
    it("renders Kontak", () => {
        render(<Kontak />);
        expect(screen.getByText("Name")).toBeInTheDocument();
        expect(screen.getByText("Message")).toBeInTheDocument();
        expect(screen.getByText("Tugas 3 PWL - 120140004 - Hariando Muthi")).toBeInTheDocument();
    })
})
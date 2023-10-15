import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import Beranda from "./beranda";
describe("Beranda", () => {
    it("renders Beranda", () => {
        render(<Beranda />);
        expect(screen.getByText("Gitar Ando")).toBeInTheDocument();
        expect(screen.getByText("Hobi")).toBeInTheDocument();
        expect(screen.getByText("Explore Now")).toBeInTheDocument();
        expect(screen.getByText("Tugas 3 PWL - 120140004 - Hariando Muthi")).toBeInTheDocument();
    })
})
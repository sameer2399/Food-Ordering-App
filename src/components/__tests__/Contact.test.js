import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page test cases", () => {
    it("Should load contact us component", () => {
        render(<Contact />);
    
        const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
    })
    
    it("Should load button inside contact", () => {
        render(<Contact />);
    
        const button = screen.getByRole("button");
    
        expect(button).toBeInTheDocument();
    })
    
    it("Should load input inside contact", () => {
        render(<Contact />);
    
        const input = screen.getByPlaceholderText("name");
    
        expect(input).toBeInTheDocument();
    })
    
    it("Should load all the input boxes of contact component", () => {
        render(<Contact />);
    
        const inputBoxes = screen.getAllByRole("textbox");
    
        expect(inputBoxes.length).toBe(2);
    })
})


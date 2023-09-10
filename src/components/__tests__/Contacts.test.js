import { render, screen } from "@testing-library/react";
import Contacts from "../Contacts";
import '@testing-library/jest-dom';

//test takes 2 params => description, callback function

//Test case:1 => Heading there or not
test("Should load contact us component", () => {
    //rendering the contacts component in jsdom
    render(<Contacts/>);

    //trying to find heading inside the contact screen
    const heading = screen.getByRole("heading");

    //assertion - expecting heading inside the contacts document
    expect(heading).toBeInTheDocument();
});

//Test case:2 => button exists or not
test("Should load button inside the Contact component", () => {
    render(<Contacts/>);

    const button = screen.getByRole("button");

    //Assertion
    expect(button).toBeInTheDocument();
});

//Test case:3 => whether there's placeholder named "Name"
test("Should load button inside the Contact component", () => {
    render(<Contacts/>);

    const placeholder = screen.getByPlaceholderText("Name");

    //Assertion
    expect(placeholder).toBeInTheDocument();
});
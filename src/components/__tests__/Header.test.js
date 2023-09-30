import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should load header component with the login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>    
    );

    const loginButton = screen.getByRole("button");

    expect(loginButton).toBeInTheDocument();
});

it("should render header component with cart items 0", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>    
    );

    const cartItems = screen.getByText("Cart 0");

    expect(cartItems).toBeInTheDocument();
});
it("should change login button to logout on click", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>    
    );

    const loginButton = screen.getByRole("button", { name: "Login"} )

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", { name: "Logout"} );

    expect(loginButton).toBeInTheDocument();

});
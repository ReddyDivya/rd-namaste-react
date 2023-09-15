import {fireEvent, render, screen} from "@testing-library/react";
import {act} from "react-dom/test-utils";
import Cart from "../Cart";
import MOCK_DATA_NAME from "../mocks/mockResMenu.json";
import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux";
import appStore from "../../utils/redux/appStore";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => 
    Promise.resolve({
        json : () => Promise.resolve(MOCK_DATA_NAME)
    })
);

it("Should load Restaurant Menu Component", async () => {
    await act(async () => 
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header/>
                    <RestaurantMenu/>
                    <Cart/>
                </Provider>
            </BrowserRouter>
        )
    );
    
    //when we click on Beverages (9) accordian in the McDonald's Restaurant menu
    const accordianHeader  = screen.getByText("Beverages (9)");
    fireEvent.click(accordianHeader);
    
    //getting foodItems from McDonald's
    const footItems = screen.getAllByTestId("foodItems");
    
    //Assertion
    expect(footItems.length).toBe(9);
})


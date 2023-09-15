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

it("Should load Restaurant Menu's Beverages (9) when it's clicked", async () => {
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
});

it("Should load Restaurant Menu Cart : 0 initially", async () => {
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
    
    //no cart items
    const noCartItems = screen.getByText("Cart : 0");
    
    //Assertion
    expect(noCartItems).toBeInTheDocument();
});

it("Should add one item to cart through first ADD button", async () => {
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
    
    //add items btn
    const addBtn = screen.getAllByRole("button", {name : "ADD"});
    
    //there are several ADD btn but clicking on first btn
    fireEvent.click(addBtn[1]);

    const oneCartItem = screen.getByText("Cart : 1");
    
    //Assertion
    expect(oneCartItem).toBeInTheDocument();
});

it("Should add two items to cart through second ADD button", async () => {
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
    console.log('before', screen.getAllByTestId("foodItems").length);

    //add items btn
    const addBtn = screen.getAllByRole("button", {name : "ADD"});

    //there are several ADD btn but clicking on second btn
    fireEvent.click(addBtn[2]);

    const oneCartItem = screen.getByText("Cart : 2");
    
    //Assertion
    expect(oneCartItem).toBeInTheDocument();
    console.log('after', screen.getAllByTestId("foodItems").length);
});


// it("Should check two added items are in the cart component", async () => {
//     await act(async () => 
//         render(
//             <BrowserRouter>
//                 <Provider store={appStore}>
//                     <Header/>
//                     <RestaurantMenu/>
//                     <Cart/>
//                 </Provider>
//             </BrowserRouter>
//         )
//     );
   
//     //all foodItems
//     const allFoodItems = screen.getAllByTestId("foodItems");

//     //assertion
//     expect(allFoodItems.length).toBe(23);

//     const addBtns = screen.getAllByRole("button", { name: "ADD" });
//     fireEvent.click(addBtns[1]);
//     fireEvent.click(addBtns[2]);

//     expect(screen.getAllByTestId("foodItems").length).toBe(25);
// });

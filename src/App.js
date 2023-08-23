import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Contacts from "./components/Contacts";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

/*
    1. Header
        - Logo
        - Nav Items
    2. Body
        - Search
        - Restaurant Card
    3. Footer
        - Copyright
        - Links
        - Address
        - Contact
*/

const AppLayout = () => {
    return <div className="app">
        <Header/>
        <Body/>
    </div>
}

//Router Configuration
const appRouter = createBrowserRouter([
    {
        path: "/",
        element : <AppLayout/>,
        errorElement: <Error/>,//shows error page
    },
    {
        path: "/about",
        element: <About/>,
    },
    {
        path: "/contacts",
        element: <Contacts/>,
    },
])
const root = createRoot(document.getElementById("root"));

//Providing router configuration(appRouter) to the AppLayout
root.render(
<RouterProvider router={appRouter}>
    <AppLayout/>
</RouterProvider>);

import React, {lazy, Suspense, useEffect} from "react";
import ReactDOM from "react-dom/client";
import {useState, useEffect} from "react";
import UserContext from "./utils/UserContext";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
// import Grocery from "./components/Grocery";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import appStore from "./utils/appStore";

const AppLayout = () => {

    const [userName, setUserName] = useState();

    useEffect(() => {
        const data = {
            name: "Sameer Anand"
        };

        setUserName(data.name);
    }, [])

    return (

        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: userName, setUserName}}>
                <div className="app">
                    <Header />
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
    );
};


const Grocery = lazy(() => import("./components/Grocery"));

const appRouter = createBrowserRouter([
    { 
        path: "/", 
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />  
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/Grocery",
                element: <Suspense fallback={<h1>Loading.....</h1>}><Grocery /></Suspense>
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ],
        errorElement: <Error />
    },
   
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
 
import ReactDOM from "react-dom/client"
import React from "react"
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantCard from "./components/RestaurantCard";
import About from "./components/About";
import {createBrowserRouter , Router, RouterProvider , Outlet} from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";

// const styleCard = {
//     backgroundColor : "lightseagreen",
//     color: "black"
// }
// <div className='res-card' style = {styleCard}>

const Applayout = () => {
    return (<div className="app">
        <Header/>
        <Outlet/>
    </div>);
};

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<Applayout/>,
        children:[
            {
                path: "/",
                element:<Body />,
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/contactus",
                element: <Contact/>
            },
            {
                path: "/cart",
                element: <Cart/>
            },
            {
                path:"/resmenu/:resId",
                element: <RestaurantMenu/>
            }
        ],
        errorElement:<Error/>,
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router = {appRouter} />)
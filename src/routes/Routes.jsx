import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Services from "../pages/Services/Services";
import PrivateRoute from "./PrivateRoute";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import AddService from "../pages/AddService/AddService";
import ManageServices from "../pages/ManageServices/ManageServices";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://homegrown-produce-exchange-server-a11b8.vercel.app/products')
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/services",
                element: <Services></Services>
            },
            {
                path: "/serviceDetails/:id",
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://homegrown-produce-exchange-server-a11b8.vercel.app/products/${params.id}`)
            },
            {
                path: "/addService",
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: "/manageServices",
                element: <ManageServices></ManageServices>
            }
        ]
    },
]);

export default routes;


import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import AllBuyers from "../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../Pages/Dashboard/AllSellers/AllSellers";
import ReportedItems from "../Pages/Dashboard/ReportedItems/ReportedItems";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp"


const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layouts/Main/Main");

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <h1>404 Error</h1>,
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/categories/:name',
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.name}`),
                element: <Products></Products>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard/allsellers',
                element: <AllSellers></AllSellers>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AllBuyers></AllBuyers>
            },
            {
                path: '/dashboard',
                element: <ReportedItems></ReportedItems>
            },
        ]
    }
])


export default router;
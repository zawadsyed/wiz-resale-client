import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
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
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard'
            }
        ]
    }
])


export default router;
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";


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
            }
        ]
    }
])


export default router;
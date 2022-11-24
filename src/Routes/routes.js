import Home from "../Pages/Home/Home";


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
            }
        ]
    }
])


export default router;
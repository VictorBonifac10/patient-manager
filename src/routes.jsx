import { createBrowserRouter } from "react-router-dom";
import App from "./pages/Home/App";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/cadastro-de-usuarios',
        element: <Register />
    },
    {
        path: '/login',
        element: <Login />
    }
])

export default router
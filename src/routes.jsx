import { createBrowserRouter } from "react-router-dom";
import App from "./pages/Home/App";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Edit from "./pages/Edit/Edit";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/home',
        element: <App />
    },
    {
        path: '/cadastro-de-usuarios',
        element: <Register />
    },
    {
        path: '/editar-usuario/:cpf',
        element: <Edit />
    }
])

export default router
import LoginPage from "views/Public/LoginPage";
import RegisterPage from "views/Public/RegisterPage";
import HomePage from "views/Public/HomePage";

const pagesRoutes = [
    {
        path: "/register",
        name: "Página de Registro",
        component: RegisterPage
    },
    {
        path: "/login",
        name: "Página de enntrada",
        component: LoginPage
    },
    {
        path: "/",
        name: "Money Site",
        component: HomePage
    },
    {
        redirect: true,
        path: "/404",
        pathTo: "/register",
        name: "Register Layout"
    }
];

export default pagesRoutes;

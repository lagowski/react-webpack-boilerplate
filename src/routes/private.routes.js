import Dashboard from 'views/Private/Dashboard/Dashboard';

import pagesRoutes from "./pages.routes";

var pages = [
    // {
    //   path: "/app/timeline-page",
    //   name: "Timeline Layout",
    //   mini: "TP",
    //   component: TimelinePage
    // },
    // {
    //   path: "/app/user-page",
    //   name: "User Profile",
    //   mini: "UP",
    //   component: UserProfile
    // }
].concat(pagesRoutes);

var privateRoutes = [
    {
        path: "/app/dashboard",
        name: "Dashboard",
        component: Dashboard
    },
    // {
    //     path: "/app/service",
    //     name: "Servicios",
    //     state: "Page1",
    // },
    { redirect: true, path: "/app/", pathTo: "/app/dashboard", name: "Dasboard" }
];
export default privateRoutes;
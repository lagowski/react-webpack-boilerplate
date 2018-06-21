import Public from "layouts/Public";
import Dashboard from "layouts/Dashboard";
// { path: "/app", name: "Home", component: Dashboard, private: true },

var indexRoutes = [
    { path: "/app", name: "My Data", component: Dashboard, private: true },
    { path: "/", name: "Public", component: Public },

];

export default indexRoutes;

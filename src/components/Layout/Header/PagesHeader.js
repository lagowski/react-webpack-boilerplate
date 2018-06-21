import React from "react";
import { NavLink } from "react-router-dom";

class PagesHeader extends React.Component {
     render() {

         return (
            <div>
                PAGES HEADER (PUBLIC)
                <NavLink to="/">Home</NavLink> |
                <NavLink to="/login">Login</NavLink> |
                <NavLink to="/register">Register</NavLink> |
                <NavLink to="/app/dashboard">Dashboard</NavLink>
            </div>
         );
    }
}

export default PagesHeader;
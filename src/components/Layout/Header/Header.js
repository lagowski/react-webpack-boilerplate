import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";


function Header({ ...props }) {

    return (
        <div>
            HEADER PRIVATE
            <NavLink to="/">Home</NavLink> |
            <NavLink to="/app/dashboard">Dashboard</NavLink>
        </div>
    );
}

Header.propTypes = {
    // Vars
};

export default Header;
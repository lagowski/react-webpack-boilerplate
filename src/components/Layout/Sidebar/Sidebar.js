import React from "react";
import PropTypes from "prop-types";

class Sidebar extends React.Component {

    render() {
        return (
            <div ref="mainPanel">
                SIDEBAR PRIVATE
            </div>
        );
    }
}

Sidebar.defaultProps = {
    bgColor: "blue"
};

Sidebar.propTypes = {
    bgColor: PropTypes.oneOf(["white", "black", "blue"]),
};

export default Sidebar;

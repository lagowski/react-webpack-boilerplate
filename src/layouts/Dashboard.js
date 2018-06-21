import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";

// core components
import Header from "components/Layout/Header/Header";
import Footer from "components/Layout/Footer/Footer";
import Sidebar from "components/Layout/Sidebar/Sidebar";

import privateRoutes from "routes/private.routes";


const switchRoutes = (
    <Switch>
        {privateRoutes.map((prop, key) => {
            if (prop.redirect)
                return <Redirect from={prop.path} to={prop.pathTo} key={key} />;
            return <Route path={prop.path} component={prop.component} key={key} />;
        })}
    </Switch>
);

class Dashboard extends React.Component {

    getRoute() {
        return this.props.location.pathname !== "/maps/full-screen-maps";
    }

    render() {
        return (
            <div>
                <Sidebar
                    bgColor="black"
                />
                <div ref="mainPanel">
                    <Header />
                    {this.getRoute() ? (
                        <div >
                            <div >{switchRoutes}</div>
                        </div>
                    ) : (
                        <div >{switchRoutes}</div>
                    )}
                    {this.getRoute() ? <Footer fluid /> : null}
                </div>

            </div>
        );
    }
}

export default Dashboard;

import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// core components
import PagesHeader from "components/Layout/Header/PagesHeader";
import Footer from "components/Layout/Footer/Footer";

import pagesRoutes from "routes/pages.routes";

class Public extends React.Component {

    render() {
        return (
            <div>
                <PagesHeader />
                    <Switch>
                        {pagesRoutes.map((prop, key) => {
                            // Define sub-routes for Pages with props from  pagesRoutes
                            if (prop.redirect) {
                                return (
                                    <Redirect from={prop.path} to={prop.pathTo} key={key} />
                            );
                            }
                            return (
                                <Route
                                    path={prop.path}
                                    component={prop.component}
                                    key={key}
                                    />
                            );
                        })}
                    </Switch>
                <Footer white />
            </div>
        );
    }
}

export default Public;

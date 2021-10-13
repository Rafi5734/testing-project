import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation,
} from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useAuth();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.displayName ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/signin",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;

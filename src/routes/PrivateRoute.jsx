import React from "react";
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
        {...rest}
        render={(props) => {
            if (rest.isAuthenticated) {
                return <Component {...props} />
            }else{
                return <Redirect to={
                    {
                        pathname: "/dashboard",
                        state: {
                            from: props.location
                        }
                    }
                } />
            }
        }}
    />
  )
}

export default PrivateRoute;
import React from 'react'
import { Route,useHistory } from 'react-router-dom'
import { isAuthenticated } from '.'

const PrivateRoute = ({ children }) => {
    let history = useHistory()
    return (
        <Route render={() => {
            return isAuthenticated() ? children : history.push("/signin")
        } }/>
    )
}

export default PrivateRoute

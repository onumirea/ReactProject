import React from "react";
import { Navigate } from "react-router-dom";
import ls from 'local-storage';

const ProtectedRoutes = ({children}) =>{
    var ls = require('local-storage');
    if(!ls.get('isAuthenticated')){
        return <Navigate to = '/login'/>
    }
    return children;
}
export default ProtectedRoutes;
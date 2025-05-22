import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../components/Loading';

const PrivateRoute = ({children}) => {
    const {user , loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading) return <Loading/>
    if(!user) {
        return <Navigate to='/auth/login' state={location.pathname}/>
    }
    return  children
};

export default PrivateRoute;
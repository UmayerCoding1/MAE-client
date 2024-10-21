import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivetRoute = ({children}) => {
    const {user,loading} = useAuth();

    const location = useLocation();
    if(loading) {
        return <div className='h-screen flex items-center justify-center'>
             <span className="loading loading-ring loading-lg"></span>
        </div>
    }
    if(user){
        return children;
    }

    return <Navigate to={'/login'} state={{form: location}} replace/>

};

export default PrivetRoute;
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AuthContainer from '../auth-container/AuthContainer';

const Private = (props) => {
    const {token} = useSelector(state => state.login);
    
    return token ? (
        <AuthContainer/>
    ) 
    : 
    <Navigate to="/login" />
}

export default Private
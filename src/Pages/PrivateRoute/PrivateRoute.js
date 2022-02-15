import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({children}) => {
    const { user, isLoading } = useAuth();
    const loadingStyle={
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }
    if(isLoading){
        return <div style={loadingStyle} className="loading-container">
            <Button variant="primary" disabled>
                <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
                />
                Loading...
            </Button>
        </div>
    }
    return user ? children : <Navigate to="/login"/>
};

export default PrivateRoute;
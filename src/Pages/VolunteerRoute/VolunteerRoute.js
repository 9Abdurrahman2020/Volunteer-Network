import React, { useEffect } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth'

const VolunteerRoute = ({children}) => {
    const { user, isVolunteer, volunteerLoading, getSingleVolunteer } = useAuth();
    useEffect( ()=>{
        getSingleVolunteer(user?.email)
    },[user?.email])
    const loadingStyle={
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }

    if(volunteerLoading){
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
    return isVolunteer ? children : <Navigate to="/become-volunteer"/>
};

export default VolunteerRoute;
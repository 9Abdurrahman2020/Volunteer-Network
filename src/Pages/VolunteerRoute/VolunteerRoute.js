import React, { useEffect } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth'

const VolunteerRoute = ({children}) => {
    const { user, isVolunteer, volunteerLoading, getSingleVolunteer } = useAuth();
    useEffect( ()=>{
        getSingleVolunteer(user?.email)
    },[user?.email])

    if(volunteerLoading){
        return <Button variant="primary" disabled>
                 <Spinner
                 as="span"
                 animation="grow"
                 size="sm"
                 role="status"
                 aria-hidden="true"
                 />
                 Loading...
             </Button>
     }
    return isVolunteer ? children : <Navigate to="/become-volunteer"/>
};

export default VolunteerRoute;
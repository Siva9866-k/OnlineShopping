import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../../utils/auth';

function ProtectedRoute(props) {

    let navigate = useNavigate();
    useEffect(() => {
        if (!isAuthenticated()) {
            navigate("/login");
            return;
        }
    }, []);
  return (
    <div>
        {props.children}
    </div>
  )
}

export default ProtectedRoute
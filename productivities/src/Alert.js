import React, {useEffect} from 'react';

const Alert = ({type,msg,removeAlert,goals}) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            removeAlert()
        }, 3000)
        return () => clearTimeout(timeout);
    },[goals])
    return (
        <p className={`alert alert-${type}`}>{msg}</p>
    );
};

export default Alert;
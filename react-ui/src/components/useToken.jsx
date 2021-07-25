import { useState } from 'react';

export default function useToken() {

    const getToken = () => {
        const adminTokenString = sessionStorage.getItem('adminToken');
        const userToken = JSON.parse(adminTokenString);
        return userToken?.adminToken
    };

    
    const [adminToken, setAdminToken] = useState(getToken());
    
    const saveToken = userToken => {
        sessionStorage.setItem('adminToken', JSON.stringify(userToken));
        setAdminToken(useToken.adminToken);
    };

    return {
        setAdminToken: saveToken,
        adminToken
    }
    
}


import React from 'react';
import { Outlet } from 'react-router-dom';

const Users = () => {
    return (
        <>
            <div>Users Layout</div>
            <Outlet />
        </>
    );
};

export default Users;

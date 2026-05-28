import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const RoutingDashboard = () => {
    return (<>
    <h1>Dashboard Page</h1>
    <div>
        <Link to="profile">Profile</Link>
        <Link to="accounts">Accounts</Link>

        <Outlet />
    </div>
    </>)
}

export default RoutingDashboard;
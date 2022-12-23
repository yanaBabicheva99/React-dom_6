import { Navigate } from 'react-router-dom';
import EditUserPage from './Components/editUserPage';
import Users from './Components/layout/Users';
import MainPage from './Components/mainPage';
import UserPage from './Components/userPage';
import UsersListPage from './Components/usersListPage';
const routes = (pathname) => [
    { path: '', element: <MainPage /> },
    {
        path: 'users',
        element: <Users />,
        children: [
            { path: '', element: <UsersListPage /> },
            { path: ':userId', element: <Navigate to={`${pathname}/profile`} /> },
            { path: ':userId/profile', element: <UserPage /> },
            { path: ':userId/edit', element: <EditUserPage /> },
            { path: ':uesrId/*', element: <Navigate to={`${pathname.split('/').slice(0, 3).join('/')}/profile`} /> }
        ]
    },
    { path: '*', element: <Navigate to="/" /> }
];

export default routes;

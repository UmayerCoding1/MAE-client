import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Login from "../components/login/Login";
import JoinEmployee from "../components/join-em/JoinEmployee";
import JoinHr from "../components/join-hr/JoinHr";
import Home from "../components/page/home/Home";
import Profile from "../shared/profile/Profile";
import PrivetRoute from './PrivetRoute';
import Dashboard from "../components/dashboard/Dashboard";
import AssetList from "../components/dashboard/asset-list/AssetList";
import Payment from "../components/page/payment/Payment";
import AddEmployee from "../components/dashboard/add-employee/AddEmployee";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children: [
            {
                path:'/',
                element: <Home/>
            },
            {
                path:'/profile',
                element:<PrivetRoute> <Profile/></PrivetRoute>
            }
        ]
    },
    {
     path:'dashboard',
     element: <Dashboard/>,
     children: [
          {
            path: 'asset-list',
            element: <AssetList/>
          },
          {
            path: 'add-employee',
            element: <AddEmployee/>
          }
     ]
    },





    {path:'/login', element: <Login/>},
    {path:'/join-employee', element: <JoinEmployee/>},
    {path:'/join-hr', element: <JoinHr/>},
    {path: '/payment', element: <Payment/>}
])

export default router;
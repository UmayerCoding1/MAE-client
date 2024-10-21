import React from 'react';
import Banner from '../without-login/banner/Banner';
import useAuth from '../../../hooks/useAuth';
import useRole from '../../../hooks/useRole';
import HrHome from '../hr/HrHome';
import WithOutLogin from '../without-login/WithOutLogin';


const Home = () => {
    const {user} = useAuth();
     const [isRole] = useRole();
     const {role} = isRole;
     
    return (
        <div>
           {/* {user && role === 'admin' ? <Banner/> : '' }  */}
           {user && role === 'hr' ? <HrHome/>: <WithOutLogin/> } 
           {/* {user && role === 'em' ? 'home.Em': '' }  */}
           {/* {!user && <WithOutLogin/>} */}
            
        </div>
    );
};

export default Home;
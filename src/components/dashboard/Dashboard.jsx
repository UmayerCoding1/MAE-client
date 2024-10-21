import { NavLink, Outlet } from "react-router-dom";
import useRole from "../../hooks/useRole";
import { mainLogo } from "../../provider/ImageProvider";


const Dashboard = () => {
   const [isRole] = useRole();
   const {role,logo}= isRole;
    
    
    

    
    return (
        <div className="flex">
            <div className="w-[250px] h-screen bg-gray-100">
                {/* <img className="w-24 m-5" src={mainLogo} alt="" /> */}
                <div className="h-16"></div>
            {
                role === 'hr'? <ul>
        <li onClick={() => setShowNav(!showNav)} className='font-bold mt-5 bg-gray-200 p-2 rounded-2xl text-xs lg:mr-5 lg:ml-3 lg:mt-5 '><NavLink to={'asset-list'}>Asset List</NavLink></li>
        <li onClick={() => setShowNav(!showNav)} className='font-bold mt-5 bg-gray-200 p-2 rounded-2xl text-xs lg:mr-5 lg:ml-3 lg:mt-5 '><NavLink to={'da'}>Add an Asset</NavLink></li>
        <li onClick={() => setShowNav(!showNav)} className='font-bold mt-5 bg-gray-200 p-2 rounded-2xl text-xs lg:mr-5 lg:ml-3 lg:mt-5 '><NavLink to={'add-employee'}>Add an Employee</NavLink></li>
        <li onClick={() => setShowNav(!showNav)} className='font-bold mt-5 bg-gray-200 p-2 rounded-2xl text-xs lg:mr-5 lg:ml-3 lg:mt-5 '><NavLink to={'dashboard'}>All Requests</NavLink></li>
        <li onClick={() => setShowNav(!showNav)} className='font-bold mt-5 bg-gray-200 p-2 rounded-2xl text-xs lg:mr-5 lg:ml-3 lg:mt-5 '><NavLink to={'dashboard'}>My Employee List</NavLink></li>
                </ul> : ''
              }

              {
                role === 'admin'? 
                <ul>
        <li onClick={() => setShowNav(!showNav)} className='font-bold mt-5  lg:mt-0 lg:mr-5 '><NavLink to={'asset-lst'}>Admin Home</NavLink></li>
        <li onClick={() => setShowNav(!showNav)} className='font-bold mt-5  lg:mt-0 lg:mr-5 '><NavLink to={'dashboard'}>Manage User</NavLink></li>
                </ul>
                : ''
              }
            </div> 
            <div className="flex-1 bg-gradient-to-r from-[#3232ea37] to-white">
                 <div className="w-full h-16 bg-gray-100 flex justify-end pr-5">
                    <img className="w-14 h-14 rounded-full shadow-xl " src={logo} alt="" />
                 </div>
                <Outlet/>
            </div>
            


           
            
        </div>
    );
};

export default Dashboard;
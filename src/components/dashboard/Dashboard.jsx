import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
   
    
    
    

    
    return (
        <div className="flex">
            <div className="w-[280px]">
              <ul>
              <li onClick={() => setShowNav(!showNav)} className='font-bold mt-5  lg:mt-0 lg:mr-5 '><NavLink to={'hr-home'}>HR Home</NavLink></li>
      <li onClick={() => setShowNav(!showNav)} className='font-bold mt-5  lg:mt-0 lg:mr-5 '><NavLink to={'asset-list'}>Asset List</NavLink></li>
      <li onClick={() => setShowNav(!showNav)} className='font-bold mt-5  lg:mt-0 lg:mr-5 '><NavLink to={'dashboard'}>Add an Asset</NavLink></li>
      <li onClick={() => setShowNav(!showNav)} className='font-bold mt-5  lg:mt-0 lg:mr-5 '><NavLink to={'dashboard'}>All Requests</NavLink></li>
      <li onClick={() => setShowNav(!showNav)} className='font-bold mt-5  lg:mt-0 lg:mr-5 '><NavLink to={'dashboard'}>My Employee List</NavLink></li>
      <li onClick={() => setShowNav(!showNav)} className='font-bold mt-5  lg:mt-0 lg:mr-5 '><NavLink to={'dashboard'}>Add an Employee</NavLink></li>
              </ul>
            </div>
            <div className="flex-1">
                
                <Outlet/>
            </div>
            


           
            
        </div>
    );
};

export default Dashboard;
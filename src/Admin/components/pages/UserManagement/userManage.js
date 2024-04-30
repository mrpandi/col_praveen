import React, {useState}from 'react'
import "./userManage.css"
import {Link, useNavigate} from "react-router-dom"
import AdminUserProfile from '../UserProfile/userProfile';
import SideBar from '../../common/sideBar';

const AdminUserManage = () => {
    const [activeItem, setActiveItem] = useState('userManagement');
 
    const navigate=useNavigate();
   
    // const handleOnClick = () => {
    //     // navigate('/userProfile'); 
        
    // };
    const handleItemClick = (itemName) => {
        setActiveItem(itemName);
        // setShowProfile(false); 
   
    };
  return (
    <div className='user-manage-container'>
      <SideBar setActiveItem={handleItemClick} activeItem={activeItem} />
        <div className='user-manage-main'>
            <div className='user-manage-content'>
                <h2>User Management</h2>
        
                <div className='user-manage-content-users'>
                    <div className='user-manage-content-users-heading'>
                        <h1>SL.No</h1>
                        <h1>User Name</h1>
                        <h1>Email ID</h1>
                        <h1>Phone Number</h1>
                    </div>
                    <Link to="/userProfile">
                    <div className='user-manage-content-users-details' >
                        <h1>01</h1>
                        <h1>Praveen</h1>
                        <h1>pI6wG@example.com</h1>
                        <h1>123456789</h1>

                    </div></Link>
                </div>
            
                {/* {activeItem === 'guestUsers' &&(
                <div className='user-manage-content-guest'>
                    <div className='user-manage-content-guest-heading'>
                        <h1>SL.No</h1>
                        <h1>User Name</h1>
                        <h1>Phone Number</h1>
                    </div>
                    <div className='user-manage-content-guest-details'>
                        <h1>01</h1>
                        <h1>Praveen</h1>
                        <h1>123456789</h1>
                    </div>
                     
                </div>
                )} */}
            </div>

        </div>
        
    </div>
  )
}

export default AdminUserManage
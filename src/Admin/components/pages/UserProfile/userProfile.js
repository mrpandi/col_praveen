// import React, {useState} from 'react'
// import "./userProfile.css"
// import back from "../../images/back.svg"

// const AdminUserProfile = () => {
//     const [activeItem, setActiveItem] = useState('purchaseHistory');
//     const handleItemClick = (itemName) => {
//         setActiveItem(itemName);

//     };
//   return (
//     <div className='user-profile-container'>
//         <div className='user-profile-main'>
//             <div className='user-profile-content'>
//                 <div className='user-profile-content-heading'>
//                     <img src={back}/>
//                     <h1>Profile</h1>
//                 </div>
//                 <div className='user-profile-content-details-main'>
//                 <div className='user-profile-content-details'>
//                     <div className='user-profile-content-details-profile'>
//                         <h1>User Name</h1>
//                         <p>Praveen Kumar</p>
//                     </div>
//                     <div className='user-profile-content-details-profile'>
//                         <h1>Email ID</h1>
//                         <p>1234@gmail.com</p>
//                     </div>
//                     <div className='user-profile-content-details-profile'>
//                         <h1>Phone Number</h1>
//                         <p>1234567890</p>
//                     </div>
//                 </div>
//                 <div className='user-profile-purchase-details'>
//                     <div className='user-profile-toggle'>
//                     <h1 className={activeItem === 'purchaseHistory' ? 'active' : ''} onClick={() => handleItemClick('purchaseHistory')}>Purchase History</h1>
//                     <h1 className={activeItem === 'favorite' ? 'active' : ''} onClick={() => handleItemClick('favorite')}>Favorite</h1>
//                     <h1 className={activeItem === 'cart' ? 'active' : ''} onClick={() => handleItemClick('cart')}>Cart</h1>
//                     </div>

//                     {activeItem === 'purchaseHistory' &&(
//                     <div className='user-profile-purchase-table'>
//                         <div className='user-profile-purchase-table-content'>
//                             <h1>Asset Name:</h1>
//                             <p>Dog</p>
//                         </div>
//                         <div className='user-profile-purchase-table-content'>
//                             <h1>ID:</h1>
//                             <p>31246</p>
//                         </div>
//                         <div className='user-profile-purchase-table-content'>
//                             <h1>Purchase Date:</h1>
//                             <p>DD/MM/YYYY</p>
//                         </div>
//                         <div className='user-profile-purchase-table-content'>
//                             <h1>Prize:</h1>
//                             <p>₹ 300</p>
//                         </div>

//                     </div>

//                     )}

//                     {activeItem === 'favorite' &&(
//                     <div className='user-profile-purchase-table'>
//                         <div className='user-profile-purchase-table-content'>
//                             <h1>Asset Name:</h1>
//                             <p>Dog</p>
//                         </div>
//                         <div className='user-profile-purchase-table-content'>
//                             <h1>ID:</h1>
//                             <p>31246</p>
//                         </div>

//                         <div className='user-profile-purchase-table-content'>
//                             <h1>Prize:</h1>
//                             <p>₹ 300</p>
//                         </div>

//                     </div>

//                     )}

// {activeItem === 'cart' &&(
//                     <div className='user-profile-purchase-table'>
//                         <div className='user-profile-purchase-table-content'>
//                             <h1>Asset Name:</h1>
//                             <p>Dog</p>
//                         </div>
//                         <div className='user-profile-purchase-table-content'>
//                             <h1>ID:</h1>
//                             <p>31246</p>
//                         </div>
//                         <div className='user-profile-purchase-table-content'>
//                             <h1>Added On:</h1>
//                             <p>DD/MM/YYYY</p>
//                         </div>
//                         <div className='user-profile-purchase-table-content'>
//                             <h1>Prize:</h1>
//                             <p>₹ 300</p>
//                         </div>

//                     </div>

//                     )}
//                 </div>
//                 </div>
//             </div>

//         </div>

//     </div>
//   )
// }

// export default AdminUserProfile

import React, { useState } from "react";
import "./userProfile.css";
import back from "../../images/back.svg";
import SideBar from "../../common/sideBar";
import { Link } from "react-router-dom";

const TabContent = ({ content }) => {
  // Check if content is undefined or null
  if (!content) {
    return null; // or you can return a message or fallback content
  }

  return (
    <div className="user-profile-purchase-table">
      {content.map((item, index) => (
        <div key={index} className="user-profile-purchase-table-content">
          <h1>{item.label}:</h1>
          <p>{item.value}</p>
        </div>
      ))}
    </div>
  );
};

const AdminUserProfile = () => {
  const [activeItem, setActiveItem] = useState("userManagement");
  const [activeTab, setActiveTab] = useState("purchaseHistory");

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);

  };
  const tabData = {
    purchaseHistory: [
      { label: "Asset Name", value: "Dog" },
      { label: "ID", value: "31246" },
      { label: "Purchase Date", value: "DD/MM/YYYY" },
      { label: "Prize", value: "₹ 300" },
    ],
    favorite: [
      { label: "Asset Name", value: "Dog" },
      { label: "ID", value: "31246" },
      { label: "Prize", value: "₹ 300" },
    ],
    cart: [
      { label: "Asset Name", value: "Dog" },
      { label: "ID", value: "31246" },
      { label: "Added On", value: "DD/MM/YYYY" },
      { label: "Prize", value: "₹ 300" },
    ],
  };

  return (
    <div className="user-profile-container">
      <SideBar setActiveItem={handleItemClick} activeItem={activeItem} />
      <div className="user-profile-main">
        <div className="user-profile-content">
          <div className="user-profile-content-heading">
           <Link to ="/userManagement" ><img src={back} alt="Back" /></Link>
            <h1>Profile</h1>
          </div>
          <div className="user-profile-content-details-main">
            <div className="user-profile-content-details">
              <div className="user-profile-content-details-profile">
                <h1>User Name</h1>
                <p>Praveen Kumar</p>
              </div>
              <div className="user-profile-content-details-profile">
                <h1>Email ID</h1>
                <p>1234@gmail.com</p>
              </div>
              <div className="user-profile-content-details-profile">
                <h1>Phone Number</h1>
                <p>1234567890</p>
              </div>
            </div>
            <div className="user-profile-purchase-details">
              <div className="user-profile-toggle">
                {Object.keys(tabData).map((key) => (
                  <button
                    key={key}
                    className={activeTab === key ? "active" : ""}
                    onClick={() => setActiveTab(key)}
                  >
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </button>
                ))}
              </div>
              {activeTab && <TabContent content={tabData[activeTab]} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUserProfile;

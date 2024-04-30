import React, { useState , useEffect } from "react";
import "./assetCatergorylist.css";
import SideBar from "../../common/sideBar";
import back from "../../images/back.svg";
import { useNavigate , useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../../../constant";

const AssetCatergorylist = () => {
  const [activeItem, setActiveItem] = useState("assetmanagement");
  const navigate=useNavigate();
  const [assets, setAssets] = useState([]);
  const location = useLocation();
  const categoryId = location.state ? location.state.categoryId : null; 

  useEffect(() => {
    const fetchAssets = async () => {
      try {
        if (categoryId) {
          const response = await axios.get(`${BASE_URL}/asset/getByCategory/:categoryId`);
          console.log(response); // Log the response data
          setAssets(response.data.assets);
        }
      } catch (error) {
        console.error('Error fetching assets:', error);
      }
    };
  
    fetchAssets();
  }, [categoryId]);
  console.log('Component rendered');

  const handleClick = () => {
   navigate("/addNewAsset")
  };

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };
 

  return (
    <div className="assetlist-container">
      <SideBar setActiveItem={handleItemClick} activeItem={activeItem} />
      <div className="assetlist-main">
        <div className="assetlist-content">
          <div className="assetlist-heading">
            <div className="assetlist-heading-text">
              <Link to="/assetManagement"><img src={back} alt="Back" /></Link>
              <h1>AssetManagement |</h1>
              <p>{}</p>
            </div>
            <div className="assetlist-heading-button">
              <button onClick={handleClick}>Add Asset</button>
            </div>
          </div>
          <div className="assetlist-details-table">
            <div className="assetlist-details">
            {assets.map((asset, index) => (
                <div className="assetlist-details-content" key={index}>
                  <h1>{index + 1}</h1>
                  <div className="assetlist-details-content">
                    <h1>Asset Name :</h1>
                    <p>{asset.assetName}</p>
                  </div>
                  <div className="assetlist-details-content">
                    <h1>Id :</h1>
                    <p>{asset.id}</p>
                  </div>
                  <div className="assetlist-details-content">
                    <h1>File Size :</h1>
                    <p>{asset.fileSize}</p>
                  </div>
                  <div className="assetlist-details-content">
                    <h1>File Format :</h1>
                    <p>{asset.fileFormat}</p>
                  </div>
                  <div className="assetlist-details-content">
                    <h1>Price :</h1>
                    <p>{asset.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetCatergorylist;

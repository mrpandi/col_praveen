import React, { useEffect, useState } from "react";
import "./assets.css";
import search from "../../images/icons/01.svg";
import fox from "../../images/category/fox.svg";
import like from "../../images/icons/20.svg";
import unlike from "../../images/icons/24.svg";
import plus from "../../images/icons/25.svg";
import tick from "../../images/icons/26.svg";
import download from "../../images/icons/21.svg";
import rupee from "../../images/icons/23.svg";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../../../constant";
import { useParams } from "react-router-dom";

const AssetsCard = ({ data }) => {
  const [imgSrc, setImgSrc] = useState(unlike);
  const [imgPlus, setImgPlus] = useState(plus);

  const handleClick = () => {
    setImgSrc(imgSrc === unlike ? like : unlike);
  };

  const handleClick01 = () => {
    setImgPlus(imgPlus === plus ? tick : plus);
  };

  return (
    <div className="card-assets">
      <div className="box-assets">
        <div className="image-assets">
          <Link to="/assetsPopup">
            <img src={data.imageUrl} alt={data.name} />{" "}
          </Link>
        </div>
        <div className="content-assets">
          <div className="title-assets01">
            <p>{data.name}</p>
            <img src={imgSrc} alt="Like" onClick={handleClick} />
          </div>
          <div className="title-assets02">
            <img src={download} alt="Download" />
            <p>{data.downloadSize}</p>
            <img src={rupee} alt="Rupee" />
            <h4>{data.price}</h4>
          </div>
        </div>
        <div className="icon-assets">
          <div className="iconbox-assets">
            <img src={imgPlus} onClick={handleClick01} alt="Plus" />
          </div>
        </div>
      </div>
    </div>
  );
};

function Assets() {
  const { categoryId } = useParams();
  const [assetData, setAssetData] = useState([]);

  useEffect(() => {
    // Perform API call here
    fetch(BASE_URL + `images/${categoryId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setAssetData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container-assets">
      <div className="assets-main">
        <h2 className="assets-heading">
          Explore Store Categories - Buy Professional 3D Models
        </h2>
        <div className="assets-filter">
          <div className="assets-search">
            <span className="assets-search-icon">
              <img src={search} alt="Search" />
            </span>
            <input
              type="text"
              placeholder="Search"
              className="assets-search-border"
            />
             </div>
            <select
              id="Sort"
              name="Sort"
              className="asset-page-filter"
              
            >
              <option className="asset-page-filter-input" value="">
                Sort
              </option>
            </select>
            <input
            type="range"
            className="asset-page-filter"
            />
             <select
              id="Category"
              name="Category"
              className="asset-page-filter"
              
            >
              <option className="asset-page-filter-input" value="">
                Catergory
              </option>
            </select>
            <select
              id="Format"
              name="Format"
              className="asset-page-filter"
             
            >
              <option className="asset-page-filter-input" value="">
              Format
              </option>
            </select>

            <input
            type="checkbox"
            className="asset-page-filter"
            />
            

         
        </div>
      </div>
      <div className="assets-main-container">
        {assetData.map((asset, index) => (
          <AssetsCard key={index} data={asset} />
        ))}
      </div>
    </div>
  );
}

export default Assets;

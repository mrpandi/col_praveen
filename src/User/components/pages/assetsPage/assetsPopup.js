import React, { useState , useEffect } from "react";
import "./assetsPopup.css";
import image from "../../images/category/27.svg";
import rupee from "../../images/icons/23.svg";
import img01 from "../../images/icons/28.svg";
import img02 from "../../images/icons/29.svg";
import img03 from "../../images/icons/30.svg";
import plus from "../../images/icons/32.svg";
import like from "../../images/icons/31.svg";
import tick from "../../images/icons/33.svg";
import unlike from "../../images/icons/34.svg";
import close from "../../images/icons/35.svg";


import { Link } from "react-router-dom";

const AssetsPopup = ({image}) => {
  const [imgSrc, setImgSrc] = useState(unlike);
  const [imgPlus, setImgPlus] = useState(plus);
  const [isPopupVisible, setPopupVisible] = useState(false);
 

  const handleClick = () => {
    setImgSrc(imgSrc === unlike ? like : unlike);
  };

  const handleClick01 = () => {
    setImgPlus(imgPlus === plus ? tick : plus);
  };

  const handledownloadClick = () => {
    setPopupVisible(true); // Show the popup when "Buy Now" is clicked
  };

  const handleClosePopup = () => {
    setPopupVisible(false); // Close the popup when the close button is clicked
  };


  useEffect(() => {
    // Dynamically load the Dimensions scripts if necessary
    // This is a simplified example; in a real app, you'd check if it's already loaded
    const scriptTag1 = document.createElement('script');
    scriptTag1.src = 'https://dimensions-3d-viewer.cloudinary.com/all.js';
    document.body.appendChild(scriptTag1);

    const scriptTag2 = document.createElement('script');
    scriptTag2.src = 'https://dimensions-tag.cloudinary.com/all.js';
    document.body.appendChild(scriptTag2);

    scriptTag2.onload = () => {
      // Initialize the 3D viewer after the script is loaded
      if (window.initDimensions) {
        const d8sApi = window.initDimensions({
          account: 'd8s-rvttbv',
          viewers: ['3D'],
        });
      }
    };
  }, []);


  return (
    <div id="assets-popup" className="assets-popup-container">
    {isPopupVisible && (
      <div className="download-popup">
      <div className="download-popup-content">
       <div className="download-popup-content-main">
        <h1>Download</h1>
        <button className="download-close-button" onClick={handleClosePopup}>
          &times;
        </button></div>
        <div className="download-popup-heading">
            <h1>Available Download</h1>
           
        </div>

     
       
          <div className="download-popup-types">
            <p>fbs</p>
            <p>30mb</p>
            <button
            type="button"
            className="download-popup-button">
            Download
          </button>
          </div>
          <div className="download-popup-types">
            <p>USDZ</p>
            <p>34mb</p>
            <button
            type="button"
            className="download-popup-button">
            Download
          </button>
          </div>
          <div className="download-popup-types">
            <p>glTF</p>
            <p>25mb</p>
            <button
            type="button"
            className="download-popup-button">
            Download
          </button>
          </div>
          <div className="download-popup-types">
            <p>GLB</p>
            <p>24mb</p>
            <button
            type="button"
            className="download-popup-button">
            Download
          </button>
          </div>
    
         
      
      </div>
    </div>
    )}
      <div className={`assets-popup-main  ${ isPopupVisible? "blur-background" : ""}`}>
        <div className="assets-popup-section1">
        <div className="assets-popup-section1-img" 
        id="three-d-viewer" style={{ height: '400px', background:'white'}}
         data-d8s-type="3d"
          data-d8s-id="sightmark-17-3-2024">
        {/* 3D Viewer will be embedded here */}
      </div>
          <div className="assets-popup-description">
            <h2>Asset Description:</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sapien lectus molestie
              nibh nunc cursus aliquam curabitur in vitae. Tortor lobortis
              egestas tincidunt volutpat curabitur. Bibendum id velit malesuada
              faucibus nisi amet est vulputate tellus. Metus faucibus in neque
              volutpat molestie dui urna.
            </p>
          </div>
          <div className="assets-popup-similar-sets">
                <h2>Similar Assets:</h2>
          </div>
        </div>
        <div className="assets-popup-section2">
          <div className="assets-popup-heading">
            <h1>Amber Fox</h1>
          </div>
          <div className="assets-popup-value">
            <img src={rupee} alt="Rupee Symbol" />
            <h1>390</h1>
          </div>
          <div className="assets-popup-buy">
            
          <button onClick={handledownloadClick}>Buy Now</button>
            
            <img src={imgPlus} onClick={handleClick01} alt="Plus" />
            <img src={imgSrc} alt="Image" onClick={handleClick} />
          </div>
          <div className="assets-popup-description1">
            <img src={img01} alt="Secure Payment" />
            <p>Secure Payment</p>
          </div>
          <div className="assets-popup-description1">
            <img src={img02} alt="100% Support" />
            <p>100% Support</p>
          </div>
          <div className="assets-popup-description1">
            <img src={img03} alt="Access to future version" />
            <p>Access to future version</p>
          </div>

          <div className="assets-popup-format-box">
            <div className="assets-popup-format">
              <h1>Format:</h1>
              <p>.glb / gltf,.fbx,.stl,.obj,.ply,.dae,.abc,.usdz</p>
            </div>
            <hr />
            <div className="assets-popup-format">
              <h1>File Size:</h1>
              <p>35mb</p>
            </div>
            <hr />
            <div className="assets-popup-format">
              <h1>Geometry:</h1>
              <p>
                Quads 972
                <br />
                Total triangles 1.9k
              </p>
            </div>
            <hr />
            <div className="assets-popup-format">
              <h1>Vertices:</h1>
              <p>983</p>
            </div>
            <hr />
            <div className="assets-popup-format">
              <h1>Textures:</h1>
              <p>4</p>
            </div>
            <hr />
            <div className="assets-popup-format">
              <h1>UV Layers:</h1>
              <p>Yes</p>
            </div>
            <hr />
            <div className="assets-popup-format">
              <h1>Animations:</h1>
              <p>2</p>
            </div>
            <hr />
            <div className="assets-popup-format">
              <h1>Materials:</h1>
              <p>1</p>
            </div>
            <hr />
            <div className="assets-popup-format">
              <h1>PBR:</h1>
              <p>Metalness</p>
            </div>
            <hr />
            <div className="assets-popup-format">
              <h1>Rigged:</h1>
              <p>No</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetsPopup;

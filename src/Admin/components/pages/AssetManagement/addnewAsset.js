import React ,{useState} from 'react'
import "./addnewAsset.css"
import back from "../../images/back.svg";
import { Form , Link} from 'react-router-dom';
import SideBar from '../../common/sideBar';
import SelectMenu from './selectMenu';
const AddnewAsset = () => {
    const [activeItem, setActiveItem] = useState("assetmanagement");
    const [selectedFiles, setSelectedFiles] = useState([]);
    const handleItemClick = (itemName) => {
        setActiveItem(itemName);
      };

      const handleFileChange = event => {
        const fileList = event.target.files;
        const fileNames = Array.from(fileList).map(file => file.name);
        setSelectedFiles(fileNames);
    };
  return (
    <div className="add-asset-container">
        <SideBar setActiveItem={handleItemClick} activeItem={activeItem} />
        <div className="add-asset-main">
            <div className="add-asset-content">
                <div className="add-asset-heading">
                    <Link to="/assetCategoryList"><img src={back}/></Link>
                    <h1>Add Asset</h1>
                </div>
                <div className="add-asset-details-main">
                    <div className='add-asset-details-main-container'>
                    <div className='add-asset-details'>
                        <form>
                            <div className="add-asset-form-field">
                                <label htmlFor="assetName" className="add-asset-form-label">Asset Name</label>
                                <input type="text" className="add-asset-form-input" id="assetName"  />
                            </div>
                            <div className="add-asset-form-field">
                                <label htmlFor="assetType" className="add-asset-form-label">Asset ID</label>
                                <input type="number" className="add-asset-form-input" id="assetType" />
                            </div>
                            <div className="add-asset-form-field">
                                <label htmlFor="assetPrice" className="add-asset-form-label">Price</label>
                                <input type="number" className="add-asset-form-input" id="assetPrice" />
                            </div>
                            <div className="add-asset-form-field">
                                <label htmlFor="assetPoly" className="add-asset-form-label">Poly</label>
                                <input type="number" className="add-asset-form-input" id="assetPoly" />
                            </div>
                            <div className="add-asset-form-field">
                                <label htmlFor="assetQuads" className="add-asset-form-label">Quads</label>
                                <input type="number" className="add-asset-form-input" id="assetQuads" />
                            </div>
                            <div className="add-asset-form-field">
                                <label htmlFor="assetTriangles" className="add-asset-form-label">Total Triangles</label>
                                <input type="number" className="add-asset-form-input" id="assetTriangles" />
                            </div>
                            <div className="add-asset-form-field">
                                <label htmlFor="assetVertices" className="add-asset-form-label">Vertices</label>
                                <input type="number" className="add-asset-form-input" id="assetVertices" />
                            </div>
                            <div className="add-asset-form-field">
                                <label htmlFor="assetRig" className="add-asset-form-label">Rigged</label>
                                <input type="text" className="add-asset-form-input" id="assetRig" />
                            </div>
                            <div className="add-asset-form-field">
                                <label htmlFor="assetDescription" className="add-asset-form-label">Description</label>
                                <textarea type="text" className="add-asset-form-input-des" id="assetDescription" />
                            </div>
                        </form>
                    </div>
                    <div className='add-asset-uploadmodel'>
                        <h1>Upload 3D Model</h1>
                        <form>
                           
                            <div className="add-asset-uploadmodel-form-field">
                                <h2 className="add-asset-uploadmodel-form-label">File Format</h2>
                            <SelectMenu/>
                            <div className="add-asset-uploadmodel-form-field">
                                <label htmlFor="uploadimage" className="add-asset-uploadmodel-form-label">Upload Image</label>
                                <input type="file"multiple className="add-asset-uploadmodel-form-input" id="uploadimage" onChange={handleFileChange} />
                            </div>
                            </div>
                            <div className='upload'>
                            <div className="add-asset-uploadmodel-form-field">
                                <label htmlFor="filesize" className="add-asset-uploadmodel-form-label">File Size</label>
                                <input type="text" className="add-asset-uploadmodel-form-input" id="filesize" />
                            </div>
                            {/* <div className="uploaded-files">
                                        <h3>Uploaded Files:</h3>
                                        <ul>
                                            {selectedFiles.map((fileName, index) => (
                                                <li key={index}>{fileName}</li>
                                            ))}
                                        </ul>
                                    </div> */}
                                    </div>
                          
                           

                        </form>
                    </div>  
                    </div>
                    <div className='add-asset-button' >
                    <button className='add-asset-upload-button'>Upload</button>
                    <button className='add-asset-cancel-button'>Cancel</button>
                </div>
                </div>
               
            </div>

        </div>
    </div>
  )
}

export default AddnewAsset
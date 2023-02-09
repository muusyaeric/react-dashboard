import { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
// import { productInputs, userInputs } from "../../formSource";
// import { userInputs } from "../../formSource";
import "./new.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

const New = ({ title, inputs }) => {

  const [file, setFile] = useState('')

  return (
    <div className="new">
      <Sidebar />
      <div className="new-container">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              // src={"https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
              src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="form-input">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input 
                  type="file" 
                  id="file" 
                  onChange={e => setFile(e.target.files[0])}
                  style={{ display: "none" }} />
              </div>

              {inputs.map((input) => (
                <div className="form-input" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;

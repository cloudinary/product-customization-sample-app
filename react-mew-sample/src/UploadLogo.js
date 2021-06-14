import React from 'react';
import './App.css';
import {cloudName, uploadPreset} from './config/cloudConfig';
import {logoConfig} from "./config/logoConfig";

function UploadLogo(props){
  function setLogo(){
    window.cloudinary.openUploadWidget(
      {
        cloudName: cloudName,
        uploadPreset: uploadPreset
      },
      (error, result) =>
      {
        if (!error && result && result.event === "success") {
          props.mediaEditor.update({ image: {
              imageOverlay: {
                overlays: [
                  {
                    "publicId": result.info.public_id,
                    "label": "Logo",
                    "transformation": [{}],
                    "placementOptions": logoConfig
                  },
                ]
              }}});
        }
      });
  }
  return(
    <div className="container">
      <div>Logo</div>
      <div><button className="uploadWidget" onClick={setLogo}>Upload Logo</button></div>
    </div>
  )
}

export default UploadLogo;

import React from 'react';
import './App.css';
import {cloudName} from './config/cloudConfig';

/**
  Displays images that are hosted on Cloudinary
 */
function ImagePicker(props){
  return(
    <div className="container">
      <div>Image</div>
      <div>
        <img
          src={`http://res.cloudinary.com/${cloudName}/image/upload/e_sharpen,w_50,h_50,c_fit/tshirt`}
          onClick={()=> {props.mediaEditor.update({publicIds: [{publicId:'tshirt'}]})}}/>
      </div>
      <div>
        <img
          src={`http://res.cloudinary.com/${cloudName}/image/upload/e_sharpen,w_50,h_50,c_fit/notebook`}
          onClick={()=> {props.mediaEditor.update({publicIds: [{publicId:'notebook'}]})}}/>
      </div>
    </div>
  )
}

export default ImagePicker;

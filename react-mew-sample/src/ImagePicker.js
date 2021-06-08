import React from 'react';
import './App.css';
import {cloudName} from './config/cloudConfig';

function ImagePicker(props){
  return(
    <div className="container">
      <div>
        <img
          src={`http://res.cloudinary.com/${cloudName}/image/upload/e_sharpen,w_55,h_55,c_scale/tshirt`}
          onClick={()=> {props.mediaEditor.update({publicIds: [{publicId:'tshirt'}]})}}/>
      </div>
      <div>
        <img
          src={`http://res.cloudinary.com/${cloudName}/image/upload/e_sharpen,w_55,h_55,c_scale/notebook`}
          onClick={()=> {props.mediaEditor.update({publicIds: [{publicId:'notebook'}]})}}/>
      </div>
    </div>
  )
}

export default ImagePicker;

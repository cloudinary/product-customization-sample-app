import React from 'react';
import './App.css';
import cloudName from "./config";

function ImagePicker(props){
  return(
    <div className={"row"}>
      <div className={"column"} >
        <img
             src={`http://res.cloudinary.com/${cloudName}/image/upload/w_55,h_55,c_scale/notebook`}
             onClick={()=> {props.mediaEditor.update({publicIds: [{publicId:'notebook'}]})}}/>
      </div>
      <div className={"column"} >
        <img
             src={`http://res.cloudinary.com/${cloudName}/image/upload/w_55,h_55,c_scale/tshirt`}
             onClick={()=> {props.mediaEditor.update({publicIds: [{publicId:'tshirt'}]})}}/>
      </div>
    </div>
  )
}

export default ImagePicker;

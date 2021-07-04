import React from 'react';
import './App.css';
import {cloudName} from './config/cloudConfig';
import {AdvancedImage} from '@cloudinary/react';
import {CloudinaryImage} from "@cloudinary/base";
import {fit} from "@cloudinary/base/actions/resize";
import {sharpen} from "@cloudinary/base/actions/adjust";

const tshirt = new CloudinaryImage('tshirt', { cloudName: cloudName }, { analytics: false })
  .resize(fit(50,50))
  .effect(sharpen());


const notebook = new CloudinaryImage('notebook', { cloudName: cloudName }, { analytics: false })
  .resize(fit(50,50))
  .effect(sharpen());


/**
  Displays images that are hosted on Cloudinary
 */
function ImagePicker(props){
  return(
    <div className="container">
      <div>Image</div>
      <div>
        <AdvancedImage cldImg={tshirt} onClick={()=> {props.mediaEditor.update({publicIds: [{publicId:'tshirt'}]})}}/>
      </div>
      <div>
        <AdvancedImage cldImg={notebook} onClick={()=> {props.mediaEditor.update({publicIds: [{publicId:'notebook'}]})}}/>
      </div>
    </div>
  )
}

export default ImagePicker;

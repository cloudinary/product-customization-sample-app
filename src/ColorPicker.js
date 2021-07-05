import React from 'react';
import './App.css';

/**
 * Applies the Cloudinary transformation e_replace_color to the underlying images.
 */
function replaceColor(e, mediaEditor) {
  const colorToReplace = e.target.id || e.target.value.substring(1);

  mediaEditor.update({image:{transformation: [{effect: `replace_color:${colorToReplace}:20:2596be`}]}})
}

function ColorPicker(props){
  return(
    <div className="container">
      <div>Image color</div>
      <button className="dot orange" id="f08a0e" onClick={(e)=>{replaceColor(e, props.mediaEditor)}}/>
      <button className="dot purple" id="8a0ef0" onClick={(e)=>{replaceColor(e, props.mediaEditor)}}/>
      <button className="dot pink" id="d1109e" onClick={(e)=>{replaceColor(e, props.mediaEditor)}}/>
      <button className="dot green" id="1a730d" onClick={(e)=>{replaceColor(e, props.mediaEditor)}}/>
      <button className="dot blue" id="2596be" onClick={(e)=>{replaceColor(e, props.mediaEditor)}}/>
      <div className="divider"/>
      <input type="color" onChange={(e)=>{replaceColor(e, props.mediaEditor)}}/>
    </div>
  )
}

export default ColorPicker;

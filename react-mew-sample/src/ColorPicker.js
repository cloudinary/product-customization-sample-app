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
      <div>
        <span className="dot orange" id="f08a0e" onClick={(e)=>{replaceColor(e, props.mediaEditor)}}/>
      </div>
      <div>
        <span className="dot purple" id="8a0ef0" onClick={(e)=>{replaceColor(e, props.mediaEditor)}}/>
      </div>
      <div>
        <span className="dot pink" id="d1109e" onClick={(e)=>{replaceColor(e, props.mediaEditor)}}/>
      </div>
      <div >
        <span className="dot green" id="1a730d" onClick={(e)=>{replaceColor(e, props.mediaEditor)}}/>
      </div>
      <div>
        <span className="dot blue" id="2596be" onClick={(e)=>{replaceColor(e, props.mediaEditor)}}/>
      </div>
      <div>
        <span className="divider"/>
      </div>
      <div>
        <input type="color" onChange={(e)=>{replaceColor(e, props.mediaEditor)}}/>
      </div>
    </div>
  )
}

export default ColorPicker;

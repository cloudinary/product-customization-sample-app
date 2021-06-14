import React, { useState, useEffect } from 'react';
import './App.css';
import editorConfig from './config/editorConfig';
import ImagePicker from './ImagePicker';
import ColorPicker from "./ColorPicker";
import UploadLogo from "./UploadLogo";

/**
 * Launches mediaEditor
 * @param editor
 */
function launchEditor(editor){
  editor.update(editorConfig);
  editor.show();
}

/**
 * Subscribes to "next", "prev", and "export" events
 * @param editor
 * @param setDisabled
 */
function editorListener(editor, setDisabled){
  editor.on("next", (steps)=>{
    if(steps.params.toStep === 'export'){
      setDisabled(true);
    }
  });
  editor.on("prev", (steps)=>{
    if(steps.params.toStep !== 'export'){
      setDisabled(false);
    }
  });
  editor.on("export", ()=>{
    setDisabled(false);

    // resets transformation
    editor.update({image:{transformation: [{}]}});
    editor.show();
  })
}

function App() {
  const [mediaEditor, setMediaEditor] = useState({});
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const myEditor = window.cloudinary.mediaEditor({ appendTo: document.getElementById('widget') });
    launchEditor(myEditor);
    editorListener(myEditor, setDisabled);
    setMediaEditor(myEditor);

  },[]);
  return (
    <div>
      <div className="container" style={disabled ? {pointerEvents: "none", opacity: "0.4"} : {}}>
        <div>
          <ImagePicker mediaEditor={mediaEditor}/>
        </div>
        <div className="space"></div>
        <UploadLogo mediaEditor={mediaEditor}/>
        <div className="space"></div>
        <div>
          <ColorPicker mediaEditor={mediaEditor}/>
        </div>
      </div>
      <hr/>
      <div className='widget' id="widget" />
    </div>
  );
}

export default App;

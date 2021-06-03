import React, { useState, useEffect } from 'react';
import './App.css';
import editorConfig from './editorConfig';
import ImagePicker from './ImagePicker';
import ColorPicker from "./ColorPicker";

/**
 * Launches mediaEditor
 * @param editor
 */
function launchEditor(editor){
  editor.update(editorConfig);
  editor.show();
}

/**
 * Subscribes to "next" and "prev" events
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
        <div>Image</div>
        <div>
          <ImagePicker mediaEditor={mediaEditor}/>
        </div>
        <div className="space"/>
        <div>Image color</div>
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

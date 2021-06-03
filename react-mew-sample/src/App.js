import React, { useState, useEffect } from 'react';
import './App.css';
import editorConfig from './editorConfig';
import ImagePicker from './ImagePicker';
import ColorPicker from "./ColorPicker";

function launchEditor(myEditor){
  myEditor.update(editorConfig);
  myEditor.show();
}

function App() {
  const [mediaEditor, setMediaEditor] = useState({});

  useEffect(() => {
    const myEditor = window.cloudinary.mediaEditor({ appendTo: document.getElementById('widget') });
    launchEditor(myEditor);
    setMediaEditor(myEditor);

  },[]);
  return (
    <div>
      <div className="container">
        <div>Image</div>
        <div>
          <ImagePicker mediaEditor={mediaEditor}/>
        </div>
        <div className="space"></div>
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

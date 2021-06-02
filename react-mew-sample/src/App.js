import React, { useState, useEffect } from 'react';
import './App.css';
import editorConfig from './editorConfig';
import ImagePicker from './ImagePicker';
import ColorPicker from "./ColorPicker";

function launchEditor(myEditor){
  myEditor.update(editorConfig);
  myEditor.show();
  myEditor.on("export",function(data){
    console.log(data);
  });
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
      <div className={"row"}>
        <div className="column">
          <ColorPicker mediaEditor={mediaEditor}/>
        </div>
        <div className="column"><span className="space"/></div>
        <div className={"column"}>
          <ImagePicker mediaEditor={mediaEditor}/>
        </div>
      </div>
      <hr/>
      <div className='widget' id="widget" />
    </div>
  );
}

export default App;

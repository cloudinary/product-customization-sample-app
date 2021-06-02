import React, { useState, useEffect } from 'react';
import './App.css';
import editorConfig from './editorConfig';
import ImagePicker from './ImagePicker';

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
      <div className="row">
        <div className="column">
        </div>
        <div className="column">
          <ImagePicker mediaEditor={mediaEditor}/>
        </div>
      </div>
      <div style={{height: '100px'}}/>
      <hr/>
      <div className='widget' id="widget" />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import './App.css';
import editorConfig from './editorConfig';

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
    setMediaEditor(myEditor);
    launchEditor(myEditor)
  },[]);
  return (
    <div>
      <div style={{height: '100px'}}/>
      <hr/>
      <div className={'widget'} id="widget" />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';

class MediaEditor extends React.Component{
  pic;
  myEditor;
  constructor(props) {
    super(props);
    this.pic = 'tshirt';
  }

  launchEditor = () =>{
    this.myEditor.update({
      publicIds: [{publicId: this.pic}],
      // update cloudName
      cloudName: "cloud_name",
      mode: 'inline',
      image: {
        steps: ["imageOverlay", "textOverlays", "export"],
        textOverlays: {
          fonts: [
            "Arial",
            "Times New Roman"
          ],
          presets: [
            {
              "label": "select to add text",
              "fontSize": 40,
            }
          ]
        },
        imageOverlay: {
          overlays: [
            {
              "publicId": "logo",
              "label": "Logo",
              "transformation": [{ "effect": "blackwhite" }],
              "placementOptions": [
                {
                  "x": 200,
                  "y": 283,
                  "width": 40,
                  "height": 40,
                  "gravity": "north_west"
                },
                {
                  "x": 200,
                  "y": 283,
                  "width": 40,
                  "height": 40,
                  "gravity": "north_east"
                },
                {
                  "x": 200,
                  "y": 283,
                  "width": 40,
                  "height": 40,
                  "gravity": "south_east"
                },
                {
                  "x": 200,
                  "y": 283,
                  "width": 40,
                  "height": 40,
                  "gravity": "south_west"
                },
                {
                  "x": 0,
                  "y": 0,
                  "width": 200,
                  "height": 40,
                  "gravity": "center"
                }
              ]
            },
          ]
        },
        "quality": ["auto"],
        "download": true,
        "share": true,


      }
    });
    this.myEditor.show();
    this.myEditor.on("export",function(data){
      console.log(data);

    });
  };

  componentDidMount() {
    this.myEditor = window.cloudinary.mediaEditor({ appendTo: document.getElementById('widget') });
    this.launchEditor()
  }

  render() {
    return (
      <div>
        <div className={'widget'} id="widget" />
      </div>
    );
  }
}

export default MediaEditor;

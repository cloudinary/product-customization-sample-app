import cloudName from "./config";

let editorConfig = {
  publicIds: [{publicId: 'tshirt'}],
  cloudName: cloudName,
  mode: 'inline',
  image: {
    steps: ["imageOverlay", "textOverlays", "export"],
    textOverlays: {
      fonts: [
        "Arial",
        "Georgia",
        "Times New Roman"
      ],
      presets: [
        {
          label: "test",
          previewText: "ABC",
          size: 40,
          font: "Georgia",
          weight: "bold",
          style: "italic",
          color: "#3b83c8",//"blue",
          underline: false
        },
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
};

export default editorConfig;

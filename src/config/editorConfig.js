import {cloudName} from './cloudConfig';
import {logoConfig} from "./logoConfig";

let editorConfig = {
  publicIds: [{publicId: 'tshirt'}],
  cloudName: cloudName,
  "language": {
    "messages": {
      "en_US": {
        "footer": {
          "export": "CLEAR & RESTART"
        }
      }
    }
  },
  mode: 'inline',
  image: {
    steps: ["imageOverlay", "textOverlays", "export"],
    // uncomment when text overlay is released
    // textOverlays: {
    //   fonts: [
    //     "Georgia",
    //   ],
    //   presets: [
    //     {
    //       label: "Add text",
    //       previewText: "ABC",
    //       size: 40,
    //       font: "Georgia",
    //       weight: "bold",
    //       style: "italic",
    //       color: "#3b83c8",//"blue",
    //       underline: false
    //     },
    //   ]
    // },
    imageOverlay: {
      overlays: [
        {
          "publicId": "logo",
          "label": "Logo",
          "transformation": [{}],
          "placementOptions": logoConfig
        },
      ]
    },
    "quality": ["auto"],
    "download": true,
    "share": true,


  }
};

export default editorConfig;

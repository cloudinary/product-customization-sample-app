import {cloudName} from './cloudConfig';
import {logoConfig} from "./logoConfig";

let editorConfig = {
  publicIds: [{publicId: 'tshirt'}],
  cloudName: cloudName,
  "language": {
    "messages": {
      "en_US": {
        "footer": {
          "export": "Relaunch"
        }
      }
    }
  },
  mode: 'inline',
  image: {
    steps: ["imageOverlay", "textOverlays", "export"],
    // textOverlays: {
    //   fonts: [
    //     "Arial",
    //     "Georgia",
    //     "Times New Roman"
    //   ],
    //   presets: [
    //     {
    //       label: "test",
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

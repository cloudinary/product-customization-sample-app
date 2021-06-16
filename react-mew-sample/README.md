# Media Editing Widget Sample App

This project is Cloudinary's React Media Editing Widget sample.
The sample covers the following use cases:

* Uploading images from a server using the Node SDK.
* Embedding the Media Editing Widget.
* Embedding the Upload Widget to perform unsigned uploads using an upload preset.
* Applying color transformations to images.

### Getting Started

1. Clone project

2. Set up **Upload Preset Setup**:
Upload presets enable you to centrally define a set of asset upload options
instead of specifying them in each upload call. We will use our upload preset
for unsigned uploads when using the upload widget.
    * log into the [Management Console](https://cloudinary.com/console) and select Settings > Upload and then scroll 
to the Upload presets section.

    * Create a new upload preset by clicking Add upload preset at the bottom of the upload preset list.

    * Make sure you mark you preset `unsinged`

    * Navigate to config/cloudConfig.js and paste your cloudName and Upload Preset name.

3. Set up **Server environment variable**:
To use our Node SDK we will set up our environment variable.

    * Copy the Environment variable configuration parameters 
from [Management Console](https://cloudinary.com/console) Console of your account 
into .env file of the project or export it (i.e. export CLOUDINARY_URL=xxx).

4. Run npm install
5. Run npm start 

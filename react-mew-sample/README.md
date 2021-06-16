# Media Editing Widget Sample App

This project is Cloudinary's React Media Editing Widget sample.
The sample covers the following use cases:

* Uploading images from a server using the Node SDK.
* Embedding the Media Editing Widget.
* Embedding the Upload Widget to perform unsigned uploads using an upload preset.
* Applying color transformations to images.

### Configuration Setup
To get started, first update your cloud configuration.

**Upload Preset Setup**

Upload presets enable you to centrally define a set of asset upload options
instead of specifying them in each upload call. We will use our upload preset
for unsigned uploads when using the upload widget.

1. Log into the [Management Console](https://cloudinary.com/console) and select **Settings > Upload**, then scroll 
to the **Upload presets** section.

2. Create a new upload preset by clicking **Add upload preset** at the bottom of the upload preset list.

3. Set the preset to `unsigned`.

4. Navigate to config/cloudConfig.js and paste your cloud name and upload preset name.

**Server Environment Variable Setup**

To use the Node SDK, set up your environment variable.

1. Copy the Environment variable configuration parameters 
from the [Management Console](https://cloudinary.com/console) of your account 
into the .env file of the project or export it (i.e. export CLOUDINARY_URL=xxx).
 
### Getting Started

1. Make sure the above setup was performed.
2. Clone the project.
3. Run `npm install`.
4. Run `npm start`. 

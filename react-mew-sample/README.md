# Media Editing Widget Sample App

This project is Cloudinary's React Media Editing Widget sample.
The sample covers the following use cases:

* Uploading images from a server using the Node SDK.
* Embedding the Media Editing Widget.
* Embedding the Upload Widget to perform unsigned uploads using an upload preset.
* Applying color transformations to images.

### Getting Started

1. Clone the project.

2. Set up an **upload preset**:
Upload presets enable you to centrally define a set of asset upload options
instead of specifying them in each upload call. The upload preset is used 
for unsigned uploads when using the upload widget.
    * Log into your [Management Console](https://cloudinary.com/console) and select **Settings > Upload** and then scroll 
to the **Upload presets** section.

    * Create a new upload preset by clicking **Add upload preset** at the bottom of the upload preset list.

    * Set the **Signing mode** to  **unsigned** and save the upload preset.

    * In your cloned project, navigate to **config/cloudConfig.js** and set your cloud name and upload preset name.

3. Set up a **server environment variable**:
To use the Node SDK you need to set up your environment variable.

    * Copy the **API Environment variable** 
from [Management Console](https://cloudinary.com/console) Console of your account 
into .env file of the project or export it (i.e. export CLOUDINARY_URL=xxx).

4. Run npm install
5. Run npm start 

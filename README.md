## Product Customization Sample App

This project is Cloudinary's Product Customization Sample App
The sample covers the following use cases:

* Uploading images from a server using the Node SDK.
* Embedding the [Media Editing Widget](https://cloudinary.com/documentation/media_editor).
* Embedding the [Upload Widget](https://cloudinary.com/documentation/upload_widget).
 to perform unsigned uploads using an upload preset.
* Applying color transformations to images using our 
[React and base SDKs](https://staging.cloudinary.com/documentation/react2_quick_start).

### Getting Started

1. Clone the project.

2. Set up an **upload preset**:
Upload presets enable you to centrally define a set of asset upload options
instead of specifying them in each upload call. The upload preset is used 
for unsigned uploads when using the upload widget. 
For more information, see [Upload Presets](https://cloudinary.com/documentation/upload_presets).
    * Log into your [Management Console](https://cloudinary.com/console) and select **Settings > Upload** and then scroll 
to the **Upload presets** section.

    * Create a new upload preset by clicking **Add upload preset** at the bottom of the upload preset list.

    * Set the **Signing mode** to  **unsigned** and save the upload preset.

    * In your cloned project, navigate to **src/config/cloudConfig.js** and set your cloud name and upload preset name in the `cloudName` and `uploadPreset` variables respectively.

3. Set up a **server environment variable**:
To use the [Node SDK](https://cloudinary.com/documentation/node_integration)
you need to set up your environment variable.

    * Copy the **API Environment variable** 
from your [Management Console](https://cloudinary.com/console)  
into the **.env** file of your project or export it (i.e. export CLOUDINARY_URL=xxx).

4. Run `npm install`.
5. Run `npm start`. 

**NOTE**: The Media Editing Widget
is fully configurable. Please visit our [documentation](https://cloudinary.com/documentation/media_editor) for more information. 

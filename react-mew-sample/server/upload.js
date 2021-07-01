require('dotenv').load();
const cloudinary = require("cloudinary").v2;

/**
 * Upload assets by running 'npm run upload' or 'npm start'.
 * Please refer to the README for setup instructions.
 */
if (typeof (process.env.CLOUDINARY_URL) === 'undefined') {
  console.warn('!! cloudinary config is undefined !!');
  console.warn('export CLOUDINARY_URL or set env file');
} else {
  // Upload assets
  cloudinary.uploader.upload('./images/tshirt.png', {public_id: 'tshirt'})
    .then((result) => {
      console.log(result)
    }).catch((error) => {
    console.log('error', error);
  });

  cloudinary.uploader.upload('./images/notebook.png', {public_id: 'notebook'})
    .then((result) => {
      console.log(result)
    }).catch((error) => {
    console.log('error', error);
  });

  cloudinary.uploader.upload('./images/logo.png', {public_id: 'logo'})
    .then((result) => {
      console.log(result)
    }).catch((error) => {
    console.log('error', error);
  });
}

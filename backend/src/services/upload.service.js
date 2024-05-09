'use strict';

const cloudinary = require('../initializers/init.cloudinary');

// Upload from url image
class UploadService {
  static async uploadImageFromUrl() {
    try {
      const urlImage =
        'https://www.toponseek.com/blogs/wp-content/uploads/2022/09/git.jpg';

      const folder = 'My',
        newFileName = 'testDemo';
      const result = await cloudinary.uploader.upload(urlImage, {
        folder,
        public_id: newFileName,
      });
      return result;
      // console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = UploadService;

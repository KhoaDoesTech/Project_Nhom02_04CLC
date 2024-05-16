'use strict';

const cloudinary = require('../initializers/init.cloudinary');

// Upload from url image
class UploadService {
  static async uploadImageFromUrl() {
    try {
      const urlImage =
        'https://media2.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/November2023/23CMAW.ST001.ah1_30.jpg';

      const folder = 'My',
        newFileName = 'ao_2';
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

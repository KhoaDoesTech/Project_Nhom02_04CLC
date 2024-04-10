'use strict';

// Require the cloudinary library
const cloudinary = require('cloudinary').v2;
const { cloud } = require('~/configs/environment');

// Return "https" URLs by setting secure: true
cloudinary.config({
  cloud_name: cloud.cloud_name,
  api_key: cloud.api_key,
  api_secret: cloud.api_secret,
});

module.exports = cloudinary;

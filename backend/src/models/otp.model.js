'use strict';

const { model, Schema } = require('mongoose'); // Erase if already required

const DOCUMENT_NAME = 'Otp';
const COLLECTION_NAME = 'Otps';

// Declare the Schema of the Mongo model
const otpSchema = new Schema(
  {
    otp_email: { type: String, required: true },
    otp_token: { type: String, required: true },
    expireAt: { type: Date, default: Date.now, expires: 60 }, // 60 seconds
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

//Export the model
module.exports = model(DOCUMENT_NAME, otpSchema);

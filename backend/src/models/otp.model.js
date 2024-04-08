'use strict';

const { model, Schema } = require('mongoose'); // Erase if already required

const DOCUMENT_NAME = 'Otp';
const COLLECTION_NAME = 'Otps';

// Declare the Schema of the Mongo model
const otpSchema = new Schema(
  {
    otp_email: { type: String, required: true },
    otp_token: { type: String, required: true },
    otp_type: {
      type: String,
      default: 'verify',
      enum: ['verify', 'reset', 'login'],
    },
    expireAt: { type: Date, default: Date.now, expires: 3 * 60 }, // 3 minutes
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

//Export the model
module.exports = model(DOCUMENT_NAME, otpSchema);

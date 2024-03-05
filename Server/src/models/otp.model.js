'use strict';

const { model, Schema } = require('mongoose'); // Erase if already required

const DOCUMENT_NAME = 'Otp';
const COLLECTION_NAME = 'Otps';

// Declare the Schema of the Mongo model
const otpSchema = new Schema(
  {
    email: { type: String, required: true },
    otp: { type: String, required: true },
    time: { type: Date, default: Date.now, index: { expires: 20 } }, // 20 seconds
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

//Export the model
module.exports = model(DOCUMENT_NAME, otpSchema);

'use strict';

const { model, Schema } = require('mongoose'); // Erase if already required

const DOCUMENT_NAME = 'Template';
const COLLECTION_NAME = 'Templates';

// Declare the Schema of the Mongo model
const templateSchema = new Schema(
  {
    tem_name: { type: String, required: true },
    tem_html: { type: String, required: true },
    tem_subject: { type: String, required: true },
    tem_status: { type: Boolean, default: true },
    tem_tag: {
      type: String,
      default: 'marketing',
      enum: ['otp', 'success', 'url', 'welcome', 'marketing'],
    },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

//Export the model
module.exports = model(DOCUMENT_NAME, templateSchema);

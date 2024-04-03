'use strict';

const { model, Schema } = require('mongoose');

const DOCUMENT_NAME = 'User';
const COLLECTION_NAME = 'Users';

// Declare the Schema of the Mongo model
const userSchema = new Schema(
  {
    // usr_slug: { type: String, required: true },
    usr_google_id: { type: String, default: '' },
    usr_github_id: { type: String, default: '' },
    usr_email: { type: String, required: true },
    usr_password: { type: String, default: '' },
    usr_salt: { type: String, default: '' },
    usr_name: { type: String, default: '' },
    usr_phone: { type: String, default: '' },
    usr_sex: { type: String, default: '' },
    usr_avatar: { type: String, default: '' },
    usr_role: { type: Schema.Types.ObjectId, ref: 'Role' },
    usr_status: {
      type: String,
      default: 'pending',
      enum: ['pending', 'active', 'block'],
    },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

userSchema.index({ usr_email: 'text', usr_phone: 'text', usr_name: 'text' });

//Export the model
module.exports = model(DOCUMENT_NAME, userSchema);

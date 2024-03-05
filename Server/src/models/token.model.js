'use strict';

const { Schema, model } = require('mongoose'); // Erase if already required

const DOCUMENT_NAME = 'Token';
const COLLECTION_NAME = 'Tokens';

// Declare the Schema of the Mongo model
const tokenSchema = new Schema(
  {
    user_id: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    public_key: { type: String, required: true },
    refresh_tokens_used: { type: Array, default: [] },
    refresh_token: { type: String, require: true },
  },
  {
    collection: COLLECTION_NAME,
    timestamps: true,
  }
);

//Export the model
module.exports = model(DOCUMENT_NAME, tokenSchema);

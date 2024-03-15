'use strict';

const { model, Schema } = require('mongoose'); // Erase if already required

const DOCUMENT_NAME = 'VariantGroup';
const COLLECTION_NAME = 'VariantGroups';

// Declare the Schema of the Mongo model
const variantGroupSchema = new Schema(
  {
    grp_name: { type: String, required: true },
    grp_type: { type: String, require: true, enum: ['Size', 'Color', 'Other'] },
    grp_options: { type: Array, required: true },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

//Export the model
module.exports = model(DOCUMENT_NAME, variantGroupSchema);

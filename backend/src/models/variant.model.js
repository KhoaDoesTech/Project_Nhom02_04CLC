'use strict';

const { Schema, model } = require('mongoose'); // Erase if already required
const DOCUMENT_NAME = 'Variant';
const COLLECTION_NAME = 'Variants';

const variantSchema = new Schema(
  {
    product_id: { type: Schema.Types.ObjectId, ref: 'Product' },
    variant_options: { type: Array, default: [] },
    variant_price: { type: Number, required: true },
    variant_quantity: { type: Number, required: true },
    variant_image: { type: String },
  },
  {
    collection: COLLECTION_NAME,
    timestamps: true,
  }
);

module.exports = model(DOCUMENT_NAME, variantSchema);

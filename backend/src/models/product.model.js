'use strict';

const { Schema, model } = require('mongoose'); // Erase if already required
const slugify = require('slugify');
const DOCUMENT_NAME = 'Product';
const COLLECTION_NAME = 'Products';

// Declare the Schema of the Mongo model
const productSchema = new Schema(
  {
    product_name: { type: String, required: true }, // quan jean cao cap
    product_thumb: {
      type: String,
      required: true,
      default: process.env.DEFAULT_IMAGE,
    },
    product_description: { type: String },
    product_slug: { type: String }, // quan-jean-cao-cap
    product_shop: { type: Schema.Types.ObjectId, ref: 'User' },
    product_price: { type: Number, required: true },
    product_type: { type: String, required: true },
    product_quantity: { type: Number, required: true },
    product_attributes: { type: Schema.Types.Mixed, required: true },
    product_ratingsAverage: {
      type: Number,
      default: 4.5,
      min: [1, 'Rating must be above 1.0'],
      max: [5, 'Rating must be below 5.0'],
      set: (val) => Math.round(val * 10) / 10,
    },
    variant_quantity: { type: Number, default: 0 },
    product_variations: { type: Array, default: [] },
    product_options: { type: Array, default: [] },
    isPublished: { type: Boolean, default: true, index: true },
  },
  {
    collection: COLLECTION_NAME,
    timestamps: true,
  }
);

// create index for search
productSchema.index({ product_name: 'text', product_description: 'text' });

// Document middleware: runs before save() and create()
productSchema.pre('save', function (next) {
  this.product_slug = slugify(this.product_name, { lower: true });
  next();
});

//Export the model
module.exports = model(DOCUMENT_NAME, productSchema);

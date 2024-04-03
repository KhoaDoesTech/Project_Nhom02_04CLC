const { model, Schema } = require('mongoose');

const DOCUMENT_NAME = 'Cart';
const COLLECTION_NAME = 'Carts';

const cartSchema = new Schema(
  {
    cart_user_id: { type: Schema.Types.ObjectId, ref: 'User' },
    cart_products: { type: Array, require: true, default: [] },
    /**
     * {
     *     productId,
     *     shopId,
     *     quantity,
     *     name,
     *     price
     * }
     */
    cart_count_product: { type: Number, default: 0 },
    cart_state: {
      type: String,
      require: true,
      enum: ['active', 'completed', 'fail', 'pending', 'lock'],
      default: 'active',
    },
  },
  {
    collection: COLLECTION_NAME,
    timestamps: {
      createdAt: 'createdOn',
      updatedAt: 'modifiedOn',
    },
  }
);

module.exports = model(DOCUMENT_NAME, cartSchema);

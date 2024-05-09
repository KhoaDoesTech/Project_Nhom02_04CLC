'use strict';

const {
  getProductById,
  getProductByShopId,
} = require('~/services/product.service');

const { BadRequestError } = require('~/helpers/error.response');
const {
  createComment,
  findCommentById,
  findCommentsByParentId,
} = require('~/models/repositories/comment.repo');

/**
 * key features: Comment service
 * - add comment [User, Shop]
 * - get a list of comment [User, Shop]
 * - delete a comment [User, Shop , Admin]
 */

class CommentService {
  static async createComment({
    productId,
    userId,
    content,
    parentCommentId = null,
  }) {
    const foundProduct = await getProductById(productId);
    if (!foundProduct) throw new BadRequestError('Product not found');

    if (parentCommentId) {
      const foundComment = await findCommentById(parentCommentId);
      if (!foundComment) throw new BadRequestError('Parent comment not found');
    }

    const newComment = await createComment({
      comment_product_id: productId,
      comment_user_id: userId,
      comment_content: content,
      comment_parent_id: parentCommentId,
    });
    if (!newComment) throw new BadRequestError('Create comment failed');

    return newComment;
  }

  static async getCommentsByParentId({
    productId,
    parentCommentId = null,
    query,
  }) {
    const queryInput =
      query && Object.keys(query).length ? query : { page: 0, size: 1 };
    const foundProduct = await getProductById(productId);
    if (!foundProduct) throw new BadRequestError('Product not found');

    if (parentCommentId) {
      const foundComment = await findCommentById(parentCommentId);
      if (!foundComment) throw new BadRequestError('Parent comment not found');
    }

    return await findCommentsByParentId({
      productId,
      parentCommentId,
      query: queryInput,
    });
  }
}

module.exports = CommentService;

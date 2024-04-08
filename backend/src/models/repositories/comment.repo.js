'use strict';

const { convertToObjectIdMongodb } = require('~/utils/misc');
const commentModel = require('../comment.model');
const QueryFeatures = require('~/utils/query.util');

/**
 * Creates a new comment.
 * @param {Object} commentData - The data for the comment.
 * @param {string} commentData.comment_product_id - The ID of the product the comment belongs to.
 * @param {string} commentData.comment_user_id - The ID of the user who made the comment.
 * @param {string} commentData.comment_content - The content of the comment.
 * @param {string} [commentData.comment_parent_id] - The ID of the parent comment, if any.
 * @returns {Promise<Object>} A promise that resolves to the created comment.
 */
const createComment = async (commentData) => {
  const {
    comment_product_id,
    comment_user_id,
    comment_content,
    comment_parent_id,
  } = commentData;

  let rightValue = 0;
  if (comment_parent_id) {
    const parentComment = await findCommentById(comment_parent_id);

    rightValue = parentComment.comment_right;

    await updateManyComments(comment_product_id, rightValue);
  } else {
    const maxRightValue = await getMaxRightValueForProduct(comment_product_id);

    if (maxRightValue) {
      rightValue = maxRightValue.comment_right + 1;
    } else {
      rightValue = 1;
    }
  }

  return await commentModel.create({
    comment_product_id,
    comment_user_id,
    comment_content,
    comment_parent_id,
    comment_left: rightValue,
    comment_right: rightValue + 1,
  });
};

/**
 * Retrieves the comment with the maximum right value for a given product.
 * @param {string} productId - The ID of the product.
 * @returns {Promise<Object>} A promise that resolves to the comment with the maximum right value.
 */
const getMaxRightValueForProduct = async (productId) => {
  return await commentModel.findOne(
    {
      comment_product_id: convertToObjectIdMongodb(productId),
    },
    'comment_right',
    { sort: { comment_right: -1 } }
  );
};

/**
 * Finds a comment by its ID.
 * @param {string} commentId - The ID of the comment.
 * @returns {Promise<Object>} A promise that resolves to the found comment.
 */
const findCommentById = async (commentId) => {
  return await commentModel.findById(commentId);
};

/**
 * Updates the comment_right and comment_left values for multiple comments.
 * @param {string} productId - The ID of the product.
 * @param {number} rightValue - The right value to use for updating the comments.
 * @returns {Promise<void>} A promise that resolves when the update is complete.
 */
const updateManyComments = async (productId, rightValue) => {
  // Increment comment_right values
  await commentModel.updateMany(
    {
      comment_product_id: convertToObjectIdMongodb(productId),
      comment_right: { $gte: rightValue },
    },
    {
      $inc: { comment_right: 2 },
    }
  );

  // Increment comment_left values
  await commentModel.updateMany(
    {
      comment_product_id: convertToObjectIdMongodb(productId),
      comment_left: { $gt: rightValue },
    },
    {
      $inc: { comment_left: 2 },
    }
  );
};

const findCommentsByParentId = async ({
  productId,
  parentCommentId,
  query,
}) => {
  let condition = {
    comment_product_id: convertToObjectIdMongodb(productId),
    comment_parent_id: parentCommentId,
  };

  if (parentCommentId) {
    const parentComment = await findCommentById(parentCommentId);

    condition = {
      comment_product_id: convertToObjectIdMongodb(productId),
      comment_left: { $gt: parentComment.comment_left },
      comment_right: { $lte: parentComment.comment_right },
    };
  }

  const select = {
      comment_left: 1,
      comment_right: 1,
      comment_content: 1,
      comment_parent_id: 1,
    },
    sort = {
      comment_left: 1,
    };

  const features = new QueryFeatures(
    commentModel.find(condition).select(select).sort(sort),
    query
  )
    .limitFields()
    .paging();

  return await features.query.lean();
};

module.exports = {
  createComment,
  findCommentById,
  findCommentsByParentId,
};

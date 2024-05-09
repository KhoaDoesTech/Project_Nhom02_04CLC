'use strict';

const { OK } = require('../helpers/success.response');
const CommentService = require('../services/comment.service');

class CommentController {
  createComment = async (req, res, next) => {
    new OK({
      message: 'List Cart success',
      metadata: await CommentService.createComment({
        ...req.body,
        userId: req.user.userId,
      }),
    }).send(res);
  };
  getCommentsByParentId = async (req, res, next) => {
    const { productId, parentCommentId, ...query } = req.query;
    new OK({
      message: 'List Cart success',
      metadata: await CommentService.getCommentsByParentId({
        productId,
        parentCommentId,
        query,
      }),
    }).send(res);
  };
}

module.exports = new CommentController();

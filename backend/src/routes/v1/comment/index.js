'use strict';

const express = require('express');
const CommentController = require('../../../controllers/comment.controller');
const asyncHandler = require('~/middleware/async.middleware');
const authentication = require('~/middleware/auth.middleware');

const router = express.Router();

// start authentication //
router.use(authentication);
// end authentication //

router.post('', asyncHandler(CommentController.createComment));
router.get('', asyncHandler(CommentController.getCommentsByParentId));
// router.delete('', asyncHandler(CommentController.deleteComment));

module.exports = router;

'use strict';

const { CREATED, OK } = require('../helpers/success.response');
const UserService = require('../services/user.service');

class UserController {
  searchUserByKeySearch = async (req, res, next) => {
    new OK({
      message: 'Find user success',
      metadata: await UserService.searchUserByKeySearch(req.params.keySearch),
    }).send(res);
  };
}

module.exports = new UserController();

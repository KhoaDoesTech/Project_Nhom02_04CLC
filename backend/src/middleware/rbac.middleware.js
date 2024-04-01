'use strict';

const roles = require('./role.middleware');
const { AuthFailureError } = require('../helpers/error.response');

const grantAccess = (action, resource) => {
  return async (req, res, next) => {
    try {
      const rol_name = req.user.role;
      const permission = roles.can(rol_name)[action](resource);
      if (!permission.granted) {
        throw new AuthFailureError(
          'You do not have enough permission to perform this action'
        );
      }

      next();
    } catch (error) {
      next(error);
    }
  };
};

module.exports = {
  grantAccess,
};

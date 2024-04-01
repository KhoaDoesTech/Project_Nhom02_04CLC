'use strict';

const { createResource } = require('~/models/repositories/resource.repo');

class RBACService {
  /**
   * Create a new resource
   * @param {string} name
   * @param {string} slug
   * @param {string} description
   * @returns {Promise<Object>}
   */
  static createResource = async ({ name, slug, description }) => {
    try {
      const resource = await createResource({ name, slug, description });

      return resource;
    } catch (error) {
      return error;
    }
  };

  static resourceList = async ({ userId, query }) => {
    try {
      //
    } catch (error) {}
  };
  static createRole = async (resource) => {
    try {
    } catch (error) {}
  };
  static roleList = async (resource) => {
    try {
    } catch (error) {}
  };
}

module.exports = RBACService;

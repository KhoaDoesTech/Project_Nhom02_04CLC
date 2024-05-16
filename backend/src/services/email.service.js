'use strict';

const { BadRequestError } = require('../helpers/error.response');
const {
  createTemplate,
  findTemplateByTag,
  findTemplateByName,
} = require('../models/repositories/template.repo');
// const welcomeTemplate = require('~/templates/welcome.template');

class EmailService {
  static addTemplate = async ({
    tem_name,
    tem_html,
    tem_subject,
    tem_tag = 'marketing',
    tem_status = true,
  }) => {
    const foundTemplate = await findTemplateByName(tem_name);
    if (foundTemplate) throw new BadRequestError('Template name has used');

    const tag = ['otp', 'success', 'url', 'welcome', 'marketing'];
    if (tag.includes(tem_tag) || tem_status) {
      const existTemplate = await findTemplateByTag(tem_tag);

      if (existTemplate)
        throw new BadRequestError(`Just one ${tem_tag} template is active`);
    }

    const newTemplate = await createTemplate({
      tem_name,
      tem_subject,
      tem_html,
      tem_tag,
      tem_status,
    });
    if (!newTemplate) throw new BadRequestError('Can not create template');

    return {
      template: newTemplate,
    };
  };

  // get all templates
  static getTemplate = async ({ tem_name }) => {
    const template = await findTemplateByName(tem_name);
    if (!template) throw new BadRequestError('Templates not found');

    return template;
  };

  // view one
}

module.exports = EmailService;

const path = require("path");

const copySourceDir = require("../../../util/copySourceDir");
const getTemplateDirPath = require("../../../util/getTemplateDirPath");

const createInitializedDir = (distDir, options) => {
  const isTemplateProvided = options?.template != undefined;
  const defaultTemplateDir = getTemplateDirPath();

  const templateDir = isTemplateProvided ? options.template : defaultTemplateDir;
  copySourceDir(templateDir, distDir);
};

module.exports = createInitializedDir;
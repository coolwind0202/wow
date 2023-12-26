const path = require("path");

const copySourceDir = require("../util/copySourceDir");

const createInitializedDir = (distDir, options) => {
  const isTemplateProvided = options?.template != undefined;
  const defaultTemplateDir = path.resolve(__dirname, "../../template");

  const templateDir = isTemplateProvided ? options.template : defaultTemplateDir;
  copySourceDir(templateDir, distDir);
};

module.exports = createInitializedDir;
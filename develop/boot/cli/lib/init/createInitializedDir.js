import path from "path";

import copySourceDir from "../../../util/copySourceDir/index.js";
import getTemplateDirPath from "../../../util/getTemplateDirPath.js";

const createInitializedDir = (distDir, options) => {
  const isTemplateProvided = options?.template != undefined;
  const defaultTemplateDir = getTemplateDirPath();

  const templateDir = isTemplateProvided ? options.template : defaultTemplateDir;
  copySourceDir(templateDir, distDir);
};

export default createInitializedDir;
import path from "path";

import copySourceDir from "file_util/src/copySourceDir/copySourceDir.js";
import getTemplateDirPath from "../getTemplateDirPath.js";

const createInitializedDir = (distDir, options) => {
  const isTemplateProvided = options?.template != undefined;
  const defaultTemplateDir = getTemplateDirPath();

  const templateDir = isTemplateProvided ? options.template : defaultTemplateDir;
  copySourceDir(templateDir, distDir);
};

export default createInitializedDir;
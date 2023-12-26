import path from "path";

import copySourceDir from "../../../util/copySourceDir";
import getTemplateDirPath from "../../../util/getTemplateDirPath";

const createInitializedDir = (distDir, options) => {
  const isTemplateProvided = options?.template != undefined;
  const defaultTemplateDir = getTemplateDirPath();

  const templateDir = isTemplateProvided ? options.template : defaultTemplateDir;
  copySourceDir(templateDir, distDir);
};

export default createInitializedDir;
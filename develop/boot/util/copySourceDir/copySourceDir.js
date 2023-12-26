/*
  Implemented with reference to:
  - https://github.com/jprichardson/node-fs-extra/tree/master/docs
*/

import { statSync, copySync } from "fs-extra";
import { PathNotExistsError, PathIsDirError } from "./pathAccessErrors";

function copySourceDir(srcDir, destDir) {
  const srcStat = statSync(srcDir, { throwIfNoEntry: false });
  if (srcStat == undefined) {
    throw new PathNotExistsError(`source directory '${srcDir}' does not exist.`);
  }

  if (!srcStat.isDirectory()) {
    throw new PathIsDirError(`source directory ''${srcDir} should be a directory.`);
  }

  copySync(srcDir, destDir);
}

export default copySourceDir;
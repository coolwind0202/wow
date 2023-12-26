/*
  Implemented with reference to:
  - https://github.com/jprichardson/node-fs-extra/tree/master/docs
*/

const { statSync, copySync, cp } = require("fs-extra");

const { PathNotExistsError, PathIsDirError } = require("./pathAccessErrors");

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

module.exports = copySourceDir;
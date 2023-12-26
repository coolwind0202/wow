/*
  Implemented with reference to:
  - https://nodejs.org/api/path.html#pathresolvepaths
*/

const getTemplateDirPath = () => {
  return require("path").resolve(__dirname, "../cli/template");
};
// console.log(getTemplateDirPath());

module.exports = getTemplateDirPath;